import atomic from "../detectors/atomic";
import array from "../detectors/array";
import object from "../detectors/object";

function testFn<T>(state: T, cb: (state: T) => any[]) {
  return cb(state);
}

describe("detectors functions tests", () => {

  test('atomic', () => {
    const res = testFn("hello", atomic());

    expect(res).toEqual(["hello"]);
  });

  test('array', () => {
    const res = testFn(["a", "b", "c"], array());

    expect(res).toEqual(["a", "b", "c"]);
  });

  test('array with index', () => {
    const res = testFn(["a", "b", "c"], array(0, 2));

    expect(res).toEqual(["a", "c"]);
  });

  test('object', () => {
    const res = testFn({ a: 1, b: 2, c: 3 }, object());

    expect(res).toEqual([1, 2, 3]);
  });

  test('object with props', () => {
    const res = testFn({ a: 1, b: 2, c: 3 }, object("a", "c"));

    expect(res).toEqual([1, 3]);
  });

});
