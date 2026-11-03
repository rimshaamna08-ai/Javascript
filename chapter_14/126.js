//TDZ
{
console.log(a);
let a =10;
}
//this will give a reference error
//if it was var it will be undefined; if it was a let it will have no value
//so it is created but no value is assigned hence it exists in a temporary dead zone
//TDZ (let, const) and with var (undefined)
