const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("---PRINTING INGREDIENTS WITH WHILE LOOP---");
let index =  0;
while ( index < ingredients.length){
  console.log(ingredients[index]);
  index++;
}
// Write a for loop that prints out the contents of ingredients:
// I went with for...of loop to practice it
console.log("---PRINTING INGREDIENTS WITH FOR..OF LOOP---");
for(const ingredient of ingredients )
{
  console.log(ingredient);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
/*NOTES: LENGTH RETURNS ACTUAL NUMBER OF ITEMS IN ARRAY BUT ARRAY INDEX STARTS WITH ZERO AND ENDS WITH LENGTH-1*/
console.log("---PRINTING INGREDIENTS BACKWARDS---");
let i = ingredients.length-1;
while( i >= 0){
  console.log(ingredients[i]);
  i--;
}