import * as React from 'react';

/**
 * Creates a strictly typed React context alongside its Provider component and a hook.
 * Guarantees that the context is defined when accessed, throwing an error otherwise.
 *
 * @template T - The type of the context value.
 * @param {string} [name] - Optional name of the context to be used in error messages.
 * @returns {readonly [React.FC<{ value: T; children?: React.ReactNode }>, () => T]} A tuple containing the Provider and the custom consumer hook.
 */
function getStrictContext<T>(
  name?: string,
): readonly [
  ({
    value,
    children,
  }: {
    value: T;
    children?: React.ReactNode;
  }) => React.JSX.Element,
  () => T,
] {
  const Context = React.createContext<T | undefined>(undefined);

  /**
   * Provider component that supplies the context value to its children.
   *
   * @param {Object} props - Component props.
   * @param {T} props.value - The context value to provide.
   * @param {React.ReactNode} [props.children] - Child components.
   * @returns {React.JSX.Element} The rendered Provider component.
   */
  const Provider = ({
    value,
    children,
  }: {
    value: T;
    children?: React.ReactNode;
  }) => <Context.Provider value={value}>{children}</Context.Provider>;

  /**
   * Hook to safely consume the strict context.
   *
   * @throws {Error} If called outside of the matching Provider.
   * @returns {T} The current context value.
   */
  const useSafeContext = () => {
    const ctx = React.useContext(Context);
    if (ctx === undefined) {
      throw new Error(`useContext must be used within ${name ?? 'a Provider'}`);
    }
    return ctx;
  };

  return [Provider, useSafeContext] as const;
}

export { getStrictContext };
