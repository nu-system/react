
import { useEffect } from 'react';

const useLockScroll = (enabled) => {
  if (typeof document === 'undefined') {
    return null;
  }
  // 滚动的元素
  const scrollEle = document.scrollingElement
    ? document.scrollingElement
    : document.documentElement;

  // 滚动元素滚动条宽度
  const scrollWidth = window.innerWidth - scrollEle.clientWidth;
  let styleOrigin = {};

  // 锁定滚动条
  const lock = () => {
    const { overflow, borderRight } = window.getComputedStyle(scrollEle);
    styleOrigin = { overflow, borderRight };
    scrollEle.style.overflow = 'hidden';
    scrollEle.style.borderRight = `${scrollWidth} solid transparent`;
  };

  // 解锁滚动条
  const unlock = () => {
    scrollEle.style.overflow = styleOrigin.overflow;
    scrollEle.style.borderRight = styleOrigin.borderRight;
  };

  useEffect(() => {
    // didUpdate 的时候切换滚动条
    enabled ? lock() : unlock();
    return () => {
      // unmount 的时候切换滚动条
      unlock();
    };
  }, [enabled]);
};

export default useLockScroll;
