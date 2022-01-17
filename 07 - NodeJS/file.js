const fs = require("fs");

fs.rename("test.txt", "test_2.txt", (err) => {
  console.log(err);
});
