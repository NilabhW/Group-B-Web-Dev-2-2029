function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (drink === "coffee") {
        resolve("Order taken for coffee");
      } else {
        reject("Cannot take the Order");
      }
    }, 20000);
  });
}

function processOrder(orderPlaced) {

  return new Promise(function (resolve) {
    setTimeout(function(){
        resolve(`${orderPlaced} and Served.`);
    } , 15000)
 
  });
}

function generateBill() {
  return new Promise(function (resolve) {
    resolve(`Bill Generated`);
  });
}

//   promise chaining

// placeOrder("coffee")
//   .then(function (order) {
//     console.log(order); // Order taken for coffee
//     return order;
//   })
//   .then(function (placedOrder) {
//     let orderData = processOrder(placedOrder);

//     return orderData;
//   })
//   .then(function (orderData) {
//     console.log(orderData);
//     let billdata = generateBill();
//     return billdata;
//   })
//   .then(function (billData) {
//     console.log(billData);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

async function serveOrder() {
  try {
    const orderPlaced = await placeOrder("coffee");
    const placedOrder = await processOrder(orderPlaced);
    const finalBill = await generateBill();

    console.log(orderPlaced);
    console.log(placedOrder);
    console.log(finalBill);
  } catch (error) {
    console.log(error);
  }
}

serveOrder();
