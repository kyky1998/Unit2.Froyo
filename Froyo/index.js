
let input = prompt("Enter a list of froyo flavors, separated by commas:");


let flavorsArray = input.split(",").map(flavor => flavor.trim());

const flavor = {
    yogurt:vanilla,
    yogurt:strawberry,
    yogurt:loquat,
    yogurt:mango
};

let flavorCounts = {};



flavorsArray.forEach(flavor => {
    if (flavorCounts[flavor]) {
        flavorCounts[flavor] += 1;
    } else {
        flavorCounts[flavor] = 1;
    }
});


console.table(flavorCounts);