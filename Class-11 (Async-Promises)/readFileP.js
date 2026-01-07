const fileSystem = require("fs");

console.log("start");

const readFile1Promise = fileSystem.promises.readFile("f1.txt");
const readFile2Promise = fileSystem.promises.readFile("f2.txt");
const readFile3Promise = fileSystem.promises.readFile("f3.txt");


readFile1Promise.then(function (data1) {
  console.log("file 1 data -> " + data1);
});

readFile2Promise.then(function(data2){
    console.log("file 2 data -> " + data2);
})

readFile3Promise.then(function(data3){
    console.log("file 3 data -> " + data3);
})

readFile1Promise.catch(function (err) {
  console.log("error message -> " + err);
});

console.log("end");


// Explore Promise Chaining
