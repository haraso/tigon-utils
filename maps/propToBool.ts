export default function propToBool<
  Obj extends Object,
  Bool extends boolean,
  Key extends keyof Obj,
  Value extends Obj[Key]
>(key: Key, option: { eq: Value; } | { neq: Value; }) {
  return function map(base: Obj): Bool {
    if ('eq' in option)
      return (base[key] === option.eq) as Bool;

    else
      return (base[key] !== option.neq) as Bool;
  };
}
