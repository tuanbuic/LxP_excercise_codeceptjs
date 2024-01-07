/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type webPage = typeof import('./pages/WebPage.js');
type mobilePage = typeof import('./pages/MobilePage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, webPage: webPage, mobilePage: mobilePage }
  interface Methods extends WebDriver, Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
