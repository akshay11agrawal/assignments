/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/



function calculateTotalSpentByCategory(transactions) {
  let capturedCatPrice = [];

    for(let i = 0; i < transactions.length; i++){
        let cat = transactions[i].category;
        let origPrice = transactions[i].price;
        let alreadyUpdated = false;

        capturedCatPrice.find(obj => {
          if(obj.category === cat){
           let tempPrice =  obj.totalSpent;
           obj.totalSpent = tempPrice+origPrice;  
           alreadyUpdated= true;
          }
        });

        if(!alreadyUpdated){
          capturedCatPrice.push({category:cat, totalSpent : origPrice});
        }

    }
  return capturedCatPrice;
}

module.exports = calculateTotalSpentByCategory;
