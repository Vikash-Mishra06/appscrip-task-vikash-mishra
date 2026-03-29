export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store", 
    });

    if (!res.ok) {
      console.error("API FAILED:", res.status);
      return [];
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("FETCH ERROR:", error);
    return [];
  }
}