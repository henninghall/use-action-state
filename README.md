# use-action-state

## DEPRECATED

As of March 2024, [React has its own hook called `useActionState`](https://github.com/facebook/react/pull/28491) - it is recommended to use this instead of this library.

---

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
