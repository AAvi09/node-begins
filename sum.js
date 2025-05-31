function calculateSum(a, b) {
  const sum = a + b;

  console.log(`The sum of ${a} and ${b} is: ${sum}`);
}

const x = "i can export multiple things";

module.exports = { x: x, calculateSum: calculateSum }; // Export the function to be used in other files
