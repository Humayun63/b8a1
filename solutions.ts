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
