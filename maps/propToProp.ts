export default function propToProp<
  Obj1 extends Object,
  Obj2 extends Object
>(mapping: { [key in keyof Obj1]: keyof Obj2 }) {
  return function map(base: Obj1, target: Obj2): Obj2 {
    for (const key1 in mapping) {
      const key2 = mapping[key1];
      (target[key2] as any) = (base[key1] as any);
    }
    return target;
  }
}
