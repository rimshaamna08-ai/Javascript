// Shallow copy: the nested array is still shared
const original = {
    name: "Sam",
    scores: [80, 90]
};

const shallowCopy = { ...original };
shallowCopy.scores[0] = 100;
console.log(original.scores); //[100, 90] - original changed too

// Deep copy: the nested array is copied too
const deepCopy = structuredClone(original);
deepCopy.scores[1] = 95;
console.log(original.scores); // [100, 90] - original is unchanged
console.log(deepCopy.scores); // [100, 95]
