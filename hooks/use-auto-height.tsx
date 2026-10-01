'use client';

import * as React from 'react';

/**
 * Options for calculating auto height.
 *
 * @typedef {Object} AutoHeightOptions
 * @property {boolean} [includeParentBox] - Whether to include parent box styling in calculation.
 * @property {boolean} [includeSelfBox] - Whether to include the element's own box styling.
 */
type AutoHeightOptions = {
  includeParentBox?: boolean;
  includeSelfBox?: boolean;
};

/**
 * A custom hook to dynamically measure and observe the height of a DOM element,
 * adapting to window resizing and parent box sizing.
 *
 * @template T - The HTML element type.
 * @param {React.DependencyList} [deps=[]] - Dependency list to trigger re-measurement.
 * @param {AutoHeightOptions} [options] - Configuration for height measurement.
 * @returns {{ ref: React.MutableRefObject<T | null>, height: number }} Object containing the ref to attach to an element and the computed height.
 */
export function useAutoHeight<T extends HTMLElement = HTMLDivElement>(
  deps: React.DependencyList = [],
  options: AutoHeightOptions = {
    includeParentBox: true,
    includeSelfBox: false,
  },
) {
  const ref = React.useRef<T | null>(null);
  const roRef = React.useRef<ResizeObserver | null>(null);
  const [height, setHeight] = React.useState(0);

  const measure = React.useCallback(() => {
    const el = ref.current;
    if (!el) return 0;

    const base = el.getBoundingClientRect().height || 0;

    let extra = 0;

    if (options.includeParentBox && el.parentElement) {
      const cs = getComputedStyle(el.parentElement);
      const paddingY =
        (parseFloat(cs.paddingTop || '0') || 0) +
        (parseFloat(cs.paddingBottom || '0') || 0);
      const borderY =
        (parseFloat(cs.borderTopWidth || '0') || 0) +
        (parseFloat(cs.borderBottomWidth || '0') || 0);
      const isBorderBox = cs.boxSizing === 'border-box';
      if (isBorderBox) {
        extra += paddingY + borderY;
      }
    }

    if (options.includeSelfBox) {
      const cs = getComputedStyle(el);
      const paddingY =
        (parseFloat(cs.paddingTop || '0') || 0) +
        (parseFloat(cs.paddingBottom || '0') || 0);
      const borderY =
        (parseFloat(cs.borderTopWidth || '0') || 0) +
        (parseFloat(cs.borderBottomWidth || '0') || 0);
      const isBorderBox = cs.boxSizing === 'border-box';
      if (isBorderBox) {
        extra += paddingY + borderY;
      }
    }

    const dpr =
      typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const total = Math.ceil((base + extra) * dpr) / dpr;

    return total;
  }, [options.includeParentBox, options.includeSelfBox]);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    setHeight(measure());

    if (roRef.current) {
      roRef.current.disconnect();
      roRef.current = null;
    }

    const ro = new ResizeObserver(() => {
      const next = measure();
      requestAnimationFrame(() => setHeight(next));
    });

    ro.observe(el);
    if (options.includeParentBox && el.parentElement) {
      ro.observe(el.parentElement);
    }

    roRef.current = ro;

    return () => {
      ro.disconnect();
      roRef.current = null;
    };
  }, deps);

  React.useLayoutEffect(() => {
    if (height === 0) {
      const next = measure();
      if (next !== 0) setHeight(next);
    }
  }, [height, measure]);

  return { ref, height } as const;
}
