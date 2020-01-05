const amountToCoins = (amount, coins) => {
  let sortedCoins = coins.sort((a,b) => a-b).reverse();
  let coinsArray  = []
  for(let i=0;i<sortedCoins.length;i++){
    if(amount >= sortedCoins[i] && amount >= 0){
      coinsArray.push(sortedCoins[i]);
      amount -= sortedCoins[i];
      i--;
    }
  }
  return coinsArray;
}
const amount = 56;
const coins = amountToCoins(amount, [1,2,5,10]);
console.log(`Coins for Rs.${amount} are ${coins.toString()}`);