function placeOrder(drink, successCallback, errorCallback) {
  setTimeout(() => {
    if (drink === "coffee") {
      successCallback("Order taken");
    } else {
      errorCallback("Cannot take the Order");
    }
  }, 1000);
}

function processOrder(orderPlaced, callback) {
  setTimeout(() => {
    callback(`${orderPlaced} and Served.`);
  }, 1000);
}

function generateBill(callback) {
  setTimeout(() => {
    callback("Bill Generated");
  }, 1000);
}

// Execution

function serveOrderCallback() {
  placeOrder(
    "coffee",
    function (orderPlaced) {
      console.log(orderPlaced);

      processOrder(orderPlaced, function (orderReady) {
        console.log(orderReady);

        generateBill(function (billGenerated) {
          console.log(billGenerated);
        });
      });
    },
    function (error) {
      console.log(error);
    }
  );
}

serveOrderCallback();


// placeOrder(() => {
//     processOrder(() => {
//       generateBill(() => {
    
//       });
//     });
//   }); // callback hell