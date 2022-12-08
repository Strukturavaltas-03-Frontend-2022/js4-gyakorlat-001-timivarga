const convertToUppercase = (array) => {
  return new Promise((resolve, reject) => {
    let result = [];
    if (array.every((element) => typeof element === "string")) {
      result = array.map((element) => element.toUpperCase());
      resolve(result);
    } else {
      reject(new Error("Error: Not all items in the array are strings!"));
    }
  });
};
export default convertToUppercase;

// promise nélkül
const convertToUppercase2 = (array) => {
  let result = [];
  if (array.every((element) => typeof element === "string")) {
    result = array.map((element) => element.toUpperCase());
  } else {
    console.log("Error: Not all items in the array are strings!");
  }
  return result;
};

convertToUppercase2(["first", "second", "third", 11]);