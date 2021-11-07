export default function valueToProp<
  Value,
  Obj,
  Key extends keyof Obj
>(key: Key) {
  return function map(base: Value, target: Obj) {
    (target as any)[key] = base;
    return target;
  };
}
