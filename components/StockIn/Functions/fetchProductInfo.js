// Fetch product information based on sale.product
const fetchProductInfo = async ({ parsedItem }) => {
  if (!parsedItem?.product) {
    console.log("No product ID found in item data.");
    return;
  }

  try {
    console.log(`Fetching product with ID: ${parsedItem.product}`);
    const response = await fetch(`/api/products?_id=${parsedItem.product}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const fetchedProduct = await response.json();
    console.log("Fetched product:", fetchedProduct);

    // Extract the first product if the response is an array
    setProduct(fetchedProduct[0]);
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};
