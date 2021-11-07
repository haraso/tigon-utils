export default function propToValue<
  Obj extends Object,
  Value,
  Key extends keyof Obj
>(key: Key) {
  return function map(base: Obj): Value {
    return base[key] as unknown as Value;
  }
}
