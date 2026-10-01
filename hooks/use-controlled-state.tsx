import * as React from 'react';

/**
 * Common properties for components that utilize controlled and uncontrolled state.
 *
 * @template T - The state value type.
 * @interface CommonControlledStateProps
 */
interface CommonControlledStateProps<T> {
  /** The controlled value of the component. */
  value?: T;
  /** The uncontrolled default value of the component. */
  defaultValue?: T;
}

/**
 * A hook that manages controlled and uncontrolled state interchangeably.
 * If the `value` prop is provided, the state is controlled by the parent.
 * Otherwise, it manages its own internal state starting from `defaultValue`.
 *
 * @template T - The state value type.
 * @template Rest - Type for additional arguments passed to the onChange handler.
 * @param {CommonControlledStateProps<T> & { onChange?: (value: T, ...args: Rest) => void }} props - The hook properties.
 * @returns {readonly [T, (next: T, ...args: Rest) => void]} A tuple containing the current state and a state setter function.
 */
export function useControlledState<T, Rest extends any[] = []>(
  props: CommonControlledStateProps<T> & {
    onChange?: (value: T, ...args: Rest) => void;
  },
): readonly [T, (next: T, ...args: Rest) => void] {
  const { value, defaultValue, onChange } = props;

  const [state, setInternalState] = React.useState<T>(
    value !== undefined ? value : (defaultValue as T),
  );

  React.useEffect(() => {
    if (value !== undefined) setInternalState(value);
  }, [value]);

  const setState = React.useCallback(
    (next: T, ...args: Rest) => {
      setInternalState(next);
      onChange?.(next, ...args);
    },
    [onChange],
  );

  return [state, setState] as const;
}
