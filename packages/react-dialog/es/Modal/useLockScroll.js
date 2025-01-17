import { useEffect } from 'react';

var useLockScroll = function useLockScroll(enabled) {
  if (typeof document === 'undefined') {
    return null;
  } // 滚动的元素


  var scrollEle = document.scrollingElement ? document.scrollingElement : document.documentElement; // 滚动元素滚动条宽度

  var scrollWidth = window.innerWidth - scrollEle.clientWidth;
  var styleOrigin = {}; // 锁定滚动条

  var lock = function lock() {
    var _window$getComputedSt = window.getComputedStyle(scrollEle),
        overflow = _window$getComputedSt.overflow,
        borderRight = _window$getComputedSt.borderRight;

    styleOrigin = {
      overflow: overflow,
      borderRight: borderRight
    };
    scrollEle.style.overflow = 'hidden';
    scrollEle.style.borderRight = "".concat(scrollWidth, " solid transparent");
  }; // 解锁滚动条


  var unlock = function unlock() {
    scrollEle.style.overflow = styleOrigin.overflow;
    scrollEle.style.borderRight = styleOrigin.borderRight;
  };

  useEffect(function () {
    // didUpdate 的时候切换滚动条
    enabled ? lock() : unlock();
    return function () {
      // unmount 的时候切换滚动条
      unlock();
    };
  }, [enabled]);
  return null;
};

export default useLockScroll;