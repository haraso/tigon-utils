export default function boolToValue<
    Bool extends boolean,
    Value
>(options: { true: Value; } | { false: Value } | { true: Value; false: Value; }) {
  return function map(base: Bool, target: Value): Value {
    if (base && ('true' in options)) {
      return options.true!;
    }
    else if (!base && ('false' in options)) {
      return options.false!;
    }
    return target;
  };
}
