import valueToValue from "../maps/valueToValue";
import valueToBool from "../maps/valueToBool";
import boolToValue from "../maps/boolToValue";
import valueToProp from "../maps/valueToProp";
import propToValue from "../maps/propToValue";
import boolToProp from "../maps/boolToProp";
import propToBool from "../maps/propToBool";
import propToProp from "../maps/propToProp";

describe("mapping functions tests", () => {

  test('valueToValue', () => {
    function testMapFn(cb: (value1: string, value2: string) => string) {
      return cb("test", "other");
    }
    const res = testMapFn(valueToValue());

    expect(res).toEqual("test");
  });

  test('valueToBool value is equal eq test', () => {
    function testMapFn(cb: (value: string, bool: boolean) => boolean) {
      return cb("test", false);
    }
    const res = testMapFn(valueToBool({ eq: "test" }));

    expect(res).toEqual(true);
  });

  test('valueToBool value is not equal eq test', () => {
    function testMapFn(cb: (value: string, bool: boolean) => boolean) {
      return cb("test", false);
    }
    const res = testMapFn(valueToBool({ eq: "not test" }));

    expect(res).toEqual(false);
  });

  test('valueToBool value is not equal neq test', () => {
    function testMapFn(cb: (value: string, bool: boolean) => boolean) {
      return cb("test", false);
    }
    const res = testMapFn(valueToBool({ neq: "not test" }));

    expect(res).toEqual(true);
  });

  test('valueToBool value is equal neq test', () => {
    function testMapFn(cb: (value: string, bool: boolean) => boolean) {
      return cb("test", false);
    }
    const res = testMapFn(valueToBool({ neq: "test" }));

    expect(res).toEqual(false);
  });

  test('boolToValue if true to be yes', () => {
    function testMapFn(cb: (value: boolean, bool: string) => string) {
      return cb(true, "other");
    }
    const res = testMapFn(boolToValue({ true: "yes", false: "No" }));

    expect(res).toEqual("yes");
  });

  test('boolToValue if false to be no', () => {
    function testMapFn(cb: (value: boolean, bool: string) => string) {
      return cb(false, "other");
    }
    const res = testMapFn(boolToValue({ true: "yes", false: "No" }));

    expect(res).toEqual("No");
  });

  test('boolToValue if true to be other', () => {
    function testMapFn(cb: (value: boolean, bool: string) => string) {
      return cb(true, "other");
    }
    const res = testMapFn(boolToValue({ false: "No" }));

    expect(res).toEqual("other");
  });

  test('boolToValue if false to be other', () => {
    function testMapFn(cb: (value: boolean, bool: string) => string) {
      return cb(false, "other");
    }
    const res = testMapFn(boolToValue({ true: "Yes" }));

    expect(res).toEqual("other");
  });

  test('valueToProp', () => {
    function testMapFn(cb: (value: string, obj: { prop: string }) => { prop: string }) {
      return cb("changed", { prop: "other" });
    }
    const res = testMapFn(valueToProp("prop"));

    expect(res).toEqual({ prop: "changed" });
  });

  test('propToValue', () => {
    function testMapFn(cb: (obj: { prop: string }, value: string) => string) {
      return cb({ prop: "value" }, "base value");
    }
    const res = testMapFn(propToValue("prop"));

    expect(res).toEqual("value");
  });

  test('boolToProp if true to be yes', () => {
    function testMapFn(cb: (bool: boolean, obj: { prop: string }) => { prop: string }) {
      return cb(true, { prop: "other" });
    }
    const res = testMapFn(boolToProp("prop", { true: "yes", false: "no" }));

    expect(res).toEqual({ prop: "yes" });
  });

  test('boolToProp if true to be other', () => {
    function testMapFn(cb: (bool: boolean, obj: { prop: string }) => { prop: string }) {
      return cb(true, { prop: "other" });
    }
    const res = testMapFn(boolToProp("prop", { false: "no" }));

    expect(res).toEqual({ prop: "other" });
  });

  test('boolToProp if false to be no', () => {
    function testMapFn(cb: (bool: boolean, obj: { prop: string }) => { prop: string }) {
      return cb(false, { prop: "other" });
    }
    const res = testMapFn(boolToProp("prop", { true: "yes", false: "no" }));

    expect(res).toEqual({ prop: "no" });
  });

  test('boolToProp if false to be other', () => {
    function testMapFn(cb: (bool: boolean, obj: { prop: string }) => { prop: string }) {
      return cb(false, { prop: "other" });
    }
    const res = testMapFn(boolToProp("prop", { true: "yes" }));

    expect(res).toEqual({ prop: "other" });
  });

  test('propToBool prop.value is equal eq test', () => {
    function testMapFn(cb: (obj: { prop: string }, bool: boolean) => boolean) {
      return cb({ prop: "test" }, false);
    }
    const res = testMapFn(propToBool("prop", { eq: "test" }));

    expect(res).toEqual(true);
  });

  test('propToBool prop.value is not equal eq test', () => {
    function testMapFn(cb: (obj: { prop: string }, bool: boolean) => boolean) {
      return cb({ prop: "test" }, false);
    }
    const res = testMapFn(propToBool("prop", { eq: "not test" }));

    expect(res).toEqual(false);
  });

  test('propToBool prop.value is equal neq test', () => {
    function testMapFn(cb: (obj: { prop: string }, bool: boolean) => boolean) {
      return cb({ prop: "test" }, false);
    }
    const res = testMapFn(propToBool("prop", { neq: "test" }));

    expect(res).toEqual(false);
  });

  test('propToBool prop.value is not equal neq test', () => {
    function testMapFn(cb: (obj: { prop: string }, bool: boolean) => boolean) {
      return cb({ prop: "test" }, false);
    }
    const res = testMapFn(propToBool("prop", { neq: "not test" }));

    expect(res).toEqual(true);
  });

  test('propToProp', () => {
    function testMapFn(cb: (obj1: { samePropName: number; foo: string }, obj2: { samePropName: number; bar: string }) => { samePropName: number; bar: string }) {
      return cb({ samePropName: 9, foo: "test" }, { samePropName: 0, bar: "other" });
    }
    const res = testMapFn(propToProp({ samePropName: 'samePropName', foo: 'bar' }));

    expect(res).toEqual({ samePropName: 9, bar: "test" });
  });

});
