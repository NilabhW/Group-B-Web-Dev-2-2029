// pending -> Fulfilled -> Rejected -> Settles

// coin toss - heads - Promise Success
//tails - promise failure

const promise1 = new Promise(function (resolve, reject) {
  const isHeads = Math.random() >= 0.5;

  if (isHeads) {
    resolve("Promise Successfull we got heads");
  } else {
    reject("promise unsuccessfull we got tails");
  }
});

// then and catch
promise1.then(function (result) {
  console.log(result);
});

// error handling

promise1.catch(function (result) {
  console.log(result);
});

// // settle

promise1.finally(function(){
    console.log('Coin Toss Done')
})

console.log(promise1)


