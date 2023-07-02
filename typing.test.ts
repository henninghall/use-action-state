import { useActionState } from ".";

const actionWithArguments = async (a: string, b: number) => ({ a, b });
const [withArgs, { loading, error, data }] =
  useActionState(actionWithArguments);

const actionWithoutArguments = async () => "success";
const [withoutArgs] = useActionState(actionWithoutArguments);

// Should be able to read data
{
  withArgs("a", 1).then((response) => response.data?.a);
}

// @ts-expect-error if wrong type arguments
withArgs(1, 1);

// Should be able to read data without args
withoutArgs();
