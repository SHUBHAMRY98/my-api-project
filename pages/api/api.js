// api/api.js

export async function fetchData(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    return null;
  }
}
