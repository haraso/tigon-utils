import { IStore, Store } from "@tigon/state-manager";
import propToValue from "../maps/propToValue"
import valueToProp from "../maps/valueToProp"

export default function createChildStore<State extends { [key: string]: any }, Key extends keyof State>(parentStore: IStore<State>, key: Key, options: { sync: "from" | "to" | "from-to" } = { sync: "from-to" }): IStore<State[Key]> {
  const [state] = parentStore();
  const store = Store(state[key]);
  if (options.sync === "from" || options.sync === "from-to") {
    store.from(parentStore)
      .map(propToValue(key))
  }
  if (options.sync === "to" || options.sync === "from-to") {
    store.to(parentStore)
      .map(valueToProp(key))
  }
  return store;
}