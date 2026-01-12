// async await is a way to handle promises in a better way when
// we need to perform sequinetial operations



const p1 = new Promise(function(resolve , reject){
    setTimeout(function(){
      resolve('Promise 1 Resolved')
    })
})

const p2 = new Promise(function(resolve , reject){
    setTimeout(function(){
      resolve('Promise 2 Resolved')
    })
})

const p3 = new Promise(function(resolve , reject){
    setTimeout(function(){
      resolve('Promise 3 Resolved')
    })
})

//resolve this promise

// p1.then(function(result){
//     console.log(result)
// })

async function greet(){
       let result1 = await p1
       let result2 = await p2
       let result3 = await p3
       console.log(result1)
       console.log(result2)
       console.log(result3)
}

greet()