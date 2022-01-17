const fs = require("fs");

fs.unlink("test_2.txt", (err) => {
  console.log(err);
});
