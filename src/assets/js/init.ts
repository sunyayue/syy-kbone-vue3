import { vuexSet, state } from "./store";

const SET_STATUSBAR_HEIGHT = "state@statusBarHeight";
const SET_STATUSBAR_HEIGHT_REM = "state@statusBarHeightRem";
const SET_STANDARD_REM = "state@standardRem";

export function changeRem(): void {
  let width;
  let height;
  const aspectRatio = 2 / 3;
  const html = document.documentElement;
  if (VUE_APP_MP) {
    width = wx.getSystemInfoSync().screenWidth;
    height = wx.getSystemInfoSync().screenHeight;
    const systemInfo = wx.getSystemInfoSync();
    const statusBarHeight = systemInfo.statusBarHeight; // statusbar 的高度
    vuexSet(SET_STATUSBAR_HEIGHT, statusBarHeight);
  } else {
    width = html.clientWidth;
    height = html.clientHeight;
  }
  if (width > height * aspectRatio) {
    width = height * aspectRatio;
  }
  const fontSize = width / 3.75;
  // console.log(width)
  vuexSet(SET_STANDARD_REM, fontSize);
  html.style.fontSize = fontSize + "px";

  const statusBarHeightRem = state.statusBarHeight / fontSize;
  vuexSet(SET_STATUSBAR_HEIGHT_REM, statusBarHeightRem + "rem");
}
