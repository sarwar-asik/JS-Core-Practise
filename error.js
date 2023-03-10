console.log(" -------- error.js -------");

// ** Catch Error with separate
try {
  console.lhog("All is well");
} catch (e) {
  const totalError = {
    name: e.name,
    message: e.message,
    stack: e.stack,
  };

  //   console.log("Something went err wrong",totalError)
}

try {
  throw new Error("EEEEEEEEEEE");
  //   or //
  //   throw new TypeError("This is TypeError");
  // or //
  //   throw new SyntaxError("This is Syntax Error")
} catch (error) {
  const totalError = {
    name: error.name,
    message: error.message,
    stack: error.stack,
  };
  //   console.log(error, "and", totalError);
}

(async () => {
  try {
    await Promise.reject("Valo are lagena");
  } catch (error) {
    const totalError = {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
    console.log(error, "and", totalError);
  }
})();
