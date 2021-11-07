# tigon-utils

## How to install

---

1. Install [Tigon State Manager](https://www.npmjs.com/package/@tigon/state-manager) 
    ```
    npm install @tigon/state-manager
    ```
2. Install [Tigon Utils](https://www.npmjs.com/package/@tigon/utils)
    ```
    npm install @tigon/utils
    ```

---
---

## How to use maps

---

### valueToValue:

```ts
import valueToValue from "@tigon/utils/maps/valueToValue";

const userNameStore = Store<string>("Mr. Developer");

const copyOfUserNameStore = Store<string>("")

.from(userNameStore)
// .map((value) => value)
.map(valueToValue())

.to(userNameStore)
// .map((value) => value)
.map(valueToValue())
```
---

### propToProp:

```ts
import propToProp from "@tigon/utils/maps/propToProp";

const userDetailsStore = Store<{userName: string, email: string}>({userName: "user", email: "user@email.com"});

const snakeCaseUserDetailsStore = Store<{user_name: string, email: string}>({})

.from(userDetailsStore)
// .map((camelCase, snakeCase) => {
//   snakeCase.user_name = camelCase.userName;
//   snakeCase.email = camelCase.email;
//   return snakeCase;
// })
.map(propToProp({userName: 'user_name', email: 'email'}))

.to(userDetailsStore)
// .map((snakeCase, camelCase) => {
//   camelCase.userName = snakeCase.user_name;
//   camelCase.email = snakeCase.email;
//   return camelCase;
// })
.map(propToProp({user_name: 'userName', email: 'email'}))
```
---

### propToValue & valueToProp:

```ts
import propToValue from "@tigon/utils/maps/propToValue";
import valueToProp from "@tigon/utils/maps/valueToProp";

type UserDetails = {
    userName: string
    email: string
}

const rootStore = Store<{
    userDetails: UserDetails
}>({
    userDetails: {
        userName: "user",
        email: "user@email.com"
    }
});

const userDetailsStore = Store<UserDetails>({})

.from(rootStore)
// .map((root) => root.userDetails)
.map(propToValue("userDetails"))

.to(rootStore)
// .map((userDetails, root) => {
//   root.userDetails = userDetails;
//   return root;
// })
.map(valueToProp("userDetails"))
```
---

### boolToValue:

`boolToValue(options)` can map boolean to value.
- Arg: `option` is like this
    - `{true: value, false: value}` or `{true: value}` or `{false: value}`
    - It means if the base state is true the target state value will be set value as defined on property true.
    - If the base state is true, and true property is not defined, or vice versa, the target state will not change. 
---

### valueToBool:

`valueToBool(options)` can map value to boolean.
- Arg: `option` is like this
    - `{eq: value}` or `{neq: value}`
    - `eq` means if the base state is equal to the value as defined on the eq property, the target state will be `true`.
    - `neq` means if the base state is equal to the value as defined on the eq property, the target state will be `false`.
---

### boolToProp:

`boolToProp(key, options)` can map boolean to target state property.
- Arg: `key` is the name of target state properties.
- Arg: `option` is like this
    - `{true: value, false: value}` or `{true: value}` or `{false: value}`
    - It means if the base state is true the target state property value will be set value as defined on property true.
    - If the base state is true, and true property is not defined, or vice versa, the target state property will not change.
---

### propToBool:

`propToBool(key, options)` can map base state property to boolean.
- Arg: `key` is the name of base state properties.
- Arg: `option` is like this
    - `{eq: value}` or `{neq: value}`
    - `eq` means if the base state property is equal to the value as defined on the eq property, the target state will be `true`.
    - `neq` means if the base state property is equal to the value as defined on the eq property, the target state will be `false`.
---
---

## How to use detectors

---

### atomic:

`atomic()` This detector will check the full store.
  - Recommended for atomic type based stores. ex.: `string` or `number`

Example:
```ts
import atomic from "@tigon/utils/detectors/atomic";

const userNameStore = Store<string>("user", atomic());
```

---

### array:

`array(...idxs)` This detector will check the values of the store. 
  - Args: `...idx optional` Every argument is an index of store items. If it is called without index, it will be checking every item.
  - Recommended for `array` type based stores.

Example:
```ts
import array from "@tigon/utils/detectors/array";

const namesStore = Store<string[]>(["user"], array());
```

---

### object:

`object(...props)` This detector will check the properties of the store object. 
  - Args: `...props optional` Every argument is one of the property names of the store object. If it is called without arguments, it will be checking every property on the store object.
  - Recommended for `flat object` type based stores.

Example:
```ts
import object from "@tigon/utils/detectors/object";

type UserDetails = {
    userName: string
    email: string
}

const userDetailsStore = Store<UserDetails>({
    userName: "user",
    email: "user@email.com"
}, object());
```

---