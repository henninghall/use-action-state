export declare function useActionState<
  P extends any[],
  T extends (...p: P) => any
>(
  action: T
): readonly [
  (
    ...p: P
  ) => Promise<
    | { data: ReturnType<T>; error: undefined }
    | { data: undefined; error: unknown }
  >,
  {
    readonly loading: boolean;
    readonly error: unknown;
    readonly data: ReturnType<T> | undefined;
  }
];
