import { useEffect } from 'react';

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const usePullRefresh = trigger => {
  useEffect(() => {
    let downY;
    let upY;
    const setDownY = e => {
      downY = e.targetTouches[0].clientY;
    };
    const setUpY = e => {
      upY = e.changedTouches[0].clientY;
      if (upY > downY) {
        trigger();
      }
    };

    document.addEventListener('touchstart', setDownY);
    document.addEventListener('touchend', setUpY);

    return () => {
      document.removeEventListener('touchstart', setDownY);
      document.removeEventListener('touchend', setUpY);
    };
  }, [trigger]);
};
