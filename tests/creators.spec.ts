import { Store } from "@tigon/state-manager";
import createChildStore from "../creators/createChildStore";

describe("creator functions tests", () => {

  test('createChildStore sync="from-to"', () => {
    const store = Store({ fruit: "apple", user: "developer" });
    const fruitStore = createChildStore(store, "fruit");

    const [fruit, setFruit] = fruitStore();

    expect(fruit).toEqual("apple");
    setFruit("pear");

    const [parentState] = store();
    expect(parentState).toEqual({ fruit: "pear", user: "developer" });
  });

  test('createChildStore sync="from"', () => {
    const store = Store({ fruit: "apple", user: "developer" });
    const fruitStore = createChildStore(store, "fruit", { sync: "from" });

    const [fruit, setFruit] = fruitStore();

    expect(fruit).toEqual("apple");
    setFruit("pear");

    const [parentState] = store();
    expect(parentState).toEqual({ fruit: "apple", user: "developer" });
  });

  test('createChildStore sync="to"', () => {
    const store = Store({ fruit: "apple", user: "developer" });
    const fruitStore = createChildStore(store, "fruit", { sync: "to" });

    const [fruit, setFruit] = fruitStore();

    expect(fruit).toEqual("apple");
    setFruit("pear");

    const [parentState] = store();
    expect(parentState).toEqual({ fruit: "pear", user: "developer" });
  });

});
