const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");

// iterate using for loop

for (let i = 0; i < packingList.length; i++){
  console.log(packingList[i]);
}

// iterate using while loop
{
  let index = 0;
  while(index < packingList.length){
    console.log(packingList[index])
    index++;
  }
}