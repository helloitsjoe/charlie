// eslint-disable-next-line import/no-unresolved
import { useEffect } from 'react';

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getParams = (key) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(key) === 'true';
};

export const usePullRefresh = (trigger) => {
  useEffect(() => {
    let downY;
    let upY;
    const setDownY = (e) => {
      downY = e.targetTouches[0].clientY;
    };
    const setUpY = (e) => {
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

export const debounce = (fn, ms = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};
