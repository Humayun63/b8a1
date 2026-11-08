const multiplyValue = (value: number, multiplier?: number) => {
  if (typeof multiplier === "undefined") {
    return value * 2;
  } else {
    return value * multiplier;
  }
};

const processInput = (input: string | number | boolean) => {
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
const formatCoordinate = (location: Location) => {
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
