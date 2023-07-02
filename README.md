# use-action-state

A react hook that simplifies usage of <a href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions">react server actions</a>. The hook adds error handing and loading states.

## Example

```js
const [run, { error, loading }] = useActionState(action);

...

await run()
```

### Full API

```js
const [run, { error, loading, data }] = useActionState(action);

...

const { data, error } = await run()
```

## Installation

```shell
yarn add use-action-state
```

```shell
npm install use-action-state
```
