export default function valueToBool<
    Value,
    Bool extends boolean
>(option: { eq: Value; } | { neq: Value; }) {
  return function map(base: Value): Bool {
    if ('eq' in option)
      return (base === option.eq) as Bool;


    else
      return (base !== option.neq) as Bool;
  };
}
