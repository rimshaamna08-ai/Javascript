// Shallow copy: nested objects are still shared

const original = {
    name: "Sam",
    address: { city: "London" }
};

const shallowCopy = { ...original };
shallowCopy.address.city = "Paris";
console.log(original.address.city); // Paris

// Deep copy: nested objects are copied too

const deepCopy = structuredClone(original);
deepCopy.address.city = "Rome";
console.log(original.address.city); // Paris
console.log(deepCopy.address.city); // Rome
