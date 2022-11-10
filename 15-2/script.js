const screenWidth = window.screen.width;
const screenHight = window.screen.height;
const screenWithScrollWidth = window.innerWidth;
const screenWithScrollHight = window.innerHeight;
const screenInnerScrollWidth = document.documentElement.clientWidth;
const screenInnerScrollHight = document.documentElement.clientHeight;
const screenBrowserWidth = document.documentElement.scrollWidth;
const screenBrowserHight = document.documentElement.scrollHeight;

document.querySelector("button").addEventListener("click", () => {
  alert(`Размер экырана: ${screenWidth}px x ${screenHight}px. 
Размер окна браузера с полосой прокрутки: ${screenWithScrollWidth}px x ${screenWithScrollHight}px.
Размер окна браузера без полосы прокрутки: ${screenInnerScrollWidth}px x ${screenInnerScrollHight}px.
Размер веб-страницы: ${screenBrowserWidth}px x ${screenBrowserHight}px.`);
});
