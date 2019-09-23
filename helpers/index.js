export const JSONPretty = (data) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);