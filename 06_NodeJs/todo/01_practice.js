import fs from "fs";

fs.writeFile("hello.txt", "Hello world", function(err) {
  if (err) {
    console.log(err);
  }
  else{
    console.log("File written successfully");
  }
});


fs.writeFile("hii.txt", "Hii world",(err)=> {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});

