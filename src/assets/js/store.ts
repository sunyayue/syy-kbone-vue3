let state: any = getState();
interface CallBack {
  (): void;
}
const stateListeningList: any = {};
function getState() {
  return {
    stu: {
      isLogin: false
    },
    statusBarHeight: 0,
    statusBarHeightRem: 0,
    standardRem: 100,
    routerStack: [],
    routerStackIndex: 0,
    viewsCached: {}
  };
}
function addStateListeningList(
  key: string,
  listeningCallback: CallBack
): number {
  if (typeof listeningCallback !== "function") {
    console.error("请传函数");
    return 0;
  }
  const time = Date.now();
  if (!stateListeningList[key]) {
    stateListeningList[key] = {};
  }
  stateListeningList[key][time] = listeningCallback;
  return time;
}
function removeStateListeningList(key: string, time: number): number {
  if (stateListeningList[key]) {
    delete stateListeningList[key][time];
  }
  return time;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function vuexSet(key: string, value: any): void {
  const a = key.split("@");
  const length = a.length;
  if (length < 2) {
    console.error("vuexSet：key错误");
    return;
  }
  // if (key === 'state@statusBarHeight') {
  //   console.log(key, value)
  // }
  let obj = state;
  // console.log(state)
  for (let i = 1, j = length - 1; i < j; i++) {
    obj = obj[a[i]];
  }
  obj[a[length - 1]] = value;
  if (stateListeningList[key]) {
    const list = stateListeningList[key];
    console.log(JSON.stringify(list));
    for (const time in list) {
      if (Object.prototype.hasOwnProperty.call(list, time)) {
        const fun = list[time];
        fun();
      }
    }
  }
}
function vuexGet(key: string): any {
  const a = key.split("@");
  const length = a.length;
  if (length < 2) {
    console.error("vuexGet：key错误");
    return;
  }
  // if (a[1] === 'stu') {
  //   const stu = JSON.parse(localStorage.getItem('stu'))
  //   state.stu = { ...stu }
  // }
  let obj = state;
  // console.log(state)
  for (let i = 1, j = length - 1; i < j; i++) {
    obj = obj[a[i]];
  }
  return obj[a[length - 1]];
}
function getCache(key: string): any {
  return state.viewsCached[key];
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function setCache(key: string, value: any): void {
  state.viewsCached[key] = value;
}
function clearVuex(): void {
  state = getState();
  localStorage.setItem("vuexCache", JSON.stringify(state));
}
function initVuex(): void {
  const cache = localStorage.getItem("vuexCache");
  try {
    if (cache) {
      state = JSON.parse(cache);
    } else {
      state = getState();
    }
  } catch (e) {
    state = getState();
  }
}
function cacheVuex(): void {
  localStorage.setItem("vuexCache", JSON.stringify(state));
}
export {
  state,
  vuexSet,
  vuexGet,
  clearVuex,
  initVuex,
  cacheVuex,
  getCache,
  setCache,
  addStateListeningList,
  removeStateListeningList
};
