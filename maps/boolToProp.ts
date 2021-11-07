export default function boolToProp<
  Bool extends boolean,
  Obj extends Object, 
  Key extends keyof Obj,
  Value extends Obj[Key]
>(key: Key, options: { true: Value } | { false: Value } | { true: Value; false: Value }) {
  return function map(base: Bool, target: Obj): Obj {
    if (base && ('true' in options)) {
      target[key] = options.true!;
    }
    else if (!base && ('false' in options)) {
      target[key] = options.false!;
    }
    return target;
  };
}
