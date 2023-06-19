const splitStringIntoPairs = (str) => {
	if (typeof str !== "string") throw "value is not string!";
  
	str = str.replaceAll(" ", "");
  
  const pairs = [];

  for (let i = 0; i < str.length; i += 2) {
    const pair = str.slice(i, i + 2);
    pairs.push(pair);
  }
  
  if (pairs.length) {
  	pairs[pairs.length-1] = pairs[pairs.length-1].padStart(2, "_");
  }  

  return pairs;
}

console.log(splitStringIntoPairs("Web laboratory"));	
console.log(splitStringIntoPairs("Web laboratory2"));	
console.log(splitStringIntoPairs());

