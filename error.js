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

//  ** use await for getting an message neither site will crash
(async () => {
  try {
    await Promise.reject("Valo are lagena");
  } catch (error) {
    const totalError = {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
    // console.log(error, "and", totalError);
  }
})();


// Create My custom Error  //////
class MyError extends Error{
    constructor(message){
        super(message)
        this.name ="MyError ta Ami  banaichi class dia"
    }
}
// throw new MyError("MyError k call disi")

class DataBaseError extends Error{
    constructor(message){
        super(message)
        this.name =" DataBaseError name ta Ami  banaichi class dia"
        this.message =" DataBaseError message ta Ami  banaichi class dia"
    }
}
try{
    throw new DataBaseError()
}
catch(error){
    const totalError = {
        name: error.name,
        message: error.message,
        stack: error.stack,
      };
      console.table(error,"and",totalError);
}




