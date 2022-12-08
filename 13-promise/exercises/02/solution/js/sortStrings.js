const sortStrings = (array) => {
    return new Promise((resolve, reject) => {
      let result = [];
      try {
        if (array.every((element) => typeof element === "string")) {
          result = array.sort();
          resolve(result);
          console.log("js", result);
        } else {
          reject(new Error("Error: Not all items in the array are strings!"));
        }
      } catch {
        reject(new Error("Error: Something went wrong with sorting words!"));
      }
    });
  };
  
  export default sortStrings;