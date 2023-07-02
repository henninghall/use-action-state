import { useState, useTransition } from "react";

export function useActionState(action) {
  const [loading, startTransition] = useTransition();
  const [error, setError] = useState();
  const [data, setData] = useState();

  const run = (...p) => {
    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          setError(undefined);
          const data = await action(...p);
          resolve({ data });
          setData(data);
        } catch (error) {
          setError(error);
          setData(undefined);
          resolve({ error });
        }
      });
    });
  };

  return [run, { loading, error, data }];
}
