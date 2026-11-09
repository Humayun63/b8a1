# Type vs Interface

## Introduction

The `type` and `interface` both are use to shape the data in typescript. But they have different usecase based on the situation.

## In Details

### `interface`

When you need to shape an object you can use the `interface`.

```typescript
interface Employee {
  id: number;
  name: string;
  email: string;
  salary: number;
}
```

You can extends any interface as well. Like you need to create another object `Manager` which has all the properties of `Employee` along with the `department` and `employeeCount`.

```typescript
interface Manager extends Employee {
  department: string;
  employeeCount: string;
}
```

### `type`

You can use the `type` alias in most of the case. Like if you need to create any type for object, you can do it.

```typescript
type Employee = {
  id: number;
  name: string;
  email: string;
  salary: number;
};
```

You can use extends object type as well.

```typescript
type Manager = Employee & {
  department: string;
  employeeCount: string;
};
```

In `type` alis you can store `string`, `number`, `boolean`, `tuple` or any others type as well.

```typescript
type ID = number;
type name = string;
type isActive = boolean;
type coords = [number, number];
type status = "Active" | "Inactive";
```

## Conclusion

The `type` alias can be use even with the other types than object, but `interface` can't. Convension is when you need to shape any object try to use `interface` and where `interface` fails to do, use `type`.
