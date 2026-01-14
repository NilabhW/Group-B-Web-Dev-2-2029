function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ userId: 1, username: "JohnDoe" }), 1000);
  });
}

function fetchUserPosts(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
  });
}

function fetchUserComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 1;
      if (success) {
        resolve(["Nice!", "Interesting post", "Subscribed!"]);
      } else {
        reject("Failed to fetch comments ❌");
      }
    }, 800);
  });
}

// Promise Chaining

//   fetchUserData().then(function(data){
//     console.log(data)
//     return fetchUserPosts()
//   }).then(function(posts){
//     console.log(posts)
//     return fetchUserComments()
//   }).then(function(comments){
//      console.log(comments)
//   })

// Promise Combinators

// Promise.all

// all or nothing

// Promise.all([fetchUserData(), fetchUserPosts(), fetchUserComments()])
//   .then(function (results) {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
//   })
//   .catch(function (err) {
//     console.log("An Error occured ->" + err);
//   });

// promise.allSettled

Promise.allSettled([
  fetchUserData(),
  fetchUserPosts(),
  fetchUserComments(),
]).then(function (results) {
  console.log(results[0].value); // success
  console.log(results[1].value) // success
  console.log(results[2].reason)// fail
});


// try to figure out where to us all and allSettled