export declare function useActionState<
  Params extends any[],
  Action extends (...params: Params) => any,
  Data extends Awaited<ReturnType<Action>>
>(
  action: Action
): readonly [
  (
    ...params: Parameters<Action>
  ) => Promise<
    | { data: Data; error: undefined }
    | { data: undefined; error: Exclude<unknown, undefined> }
  >,
  {
    readonly loading: boolean;
    readonly error: unknown;
    readonly data: Data | undefined;
  }
];
