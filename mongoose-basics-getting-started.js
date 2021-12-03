const mongoose = require("mongoose");
//*------------ Connecting to MongoDB server
mongoose
  .connect("mongodb://localhost:27017/task-manager-api", {
    // useUrlParser: true,
    // useCreateIndex: true,
  })
  .then((result) => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// *---------creating-Model-task
const Task = mongoose.model("Task", {
  description: {
    type: String,
    //**Inbuilt-validators */
    // minLength:19,
    // maxLength:2,
  },
  completed: {
    type: Boolean,
  },
  age: {
    type: Number,
    reqired: true,
    //** creating custom Validation */
    // validate: (value) => {
    //   if (value < 18) {
    //     throw new Error(`{VALUE} is invalid `);
    //   }
    //   return;
    // },
  },
});
// *----------create-Model-Instance
const newTask = Task({
  description: "Testrk1",
  completed: false,
  age: 12,
});

//*--------- saving-newTask
newTask
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
