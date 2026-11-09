# How Access Modifiers Works in TypeScript OOP

## Introduction

In OOP the **Access Modifiers** are the way to control the property, methods of the class. The modifiers are `public`, `private`, `protected`, and `readonly`.

## In Details

When you are creating a class, you might don't want provide all your properties, methods of your class to accessable from anywhere. To set the rules how to control them, OOP provides you few keywords with some power.

### Public Modifier

When you want to make any property/method to access inside the class, its children and from outside of the class through its instance, you need a public modifier. Just add `public` keyword before your property/method, and it will become publicly accessible.

NB: Accessible means you can read and modify the property/method.

### Private Modifier

Suppose you have a property which you want to use only inside the class, then you need this one.

### Protected Modifier

The `private` and `protected` are the similar, but with `protected` modifier the property/method can be access inside the class and it's children but cannot from any instance.

### Readonly Modifier

Suppose you need to declare a property which should not be change but can read, then we need the `readonly`.

```typescript
class Employee {
    constructor(
        public readonly id: number; // This is public property but only can read, can't modify
        public name: string;
        protected department: string;
        private salary: number;
    ){};

    public showSalary(): number {
        retun this.salary; // Only can access from inside this class
    }
}

class Manager extends Employee {
    public showDepartment(): string {
        // accessing from inside the children
        return `His is in ${this.department}`
    }
}

const kabir = new Employee(1, "Humayun", "Engineering", 25000);

console.log(kabir.name) // work
kabir.name = 'H.Kabir'; // work

console.log(kabir.salary) // error
console.log(kabir.showSalary()) // work

console.log(kabir.id) // work
kabir.id = 5; // error
```
