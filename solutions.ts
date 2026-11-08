const multiplyValue = (value: number, multiplier?: number): number => {
  if (typeof multiplier === "undefined") {
    return value * 2;
  } else {
    return value * multiplier;
  }
};

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "boolean") {
    if (input) {
      return "Active";
    } else {
      return "Inactive";
    }
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input.trim().toLowerCase();
  }
};

type Location = readonly [number, number, string];
const formatCoordinate = (location: Location): string => {
  return `Location: ${location[2]} (${location[0]}, ${location[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];
  return result.concat(...arrays);
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const result: T[K][] = [];
  items.forEach((item) => {
    result.push(item[key]);
  });

  return result;
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
