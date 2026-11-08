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
