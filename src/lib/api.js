export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json();
  } catch (err) {
    console.log("API ERROR:", err);
    return [];
  }
}