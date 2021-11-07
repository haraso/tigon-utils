export default function valueToValue<Value>() {
  return function map(base: Value): Value {
    return base;
  };
}
