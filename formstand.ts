interface Product {
  name: string;
}
const printProductSummary = (product: Product) => {
  return product.name;
};
console.log(printProductSummary({ name: "Headphone" }));
