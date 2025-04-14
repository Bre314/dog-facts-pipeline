document.getElementById("getFactBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:3001/api/fact");
    const data = await response.json();
    document.getElementById("factDisplay").innerText = data.fact;
  } catch (err) {
    document.getElementById("factDisplay").innerText =
      "Failed to fetch a fact.";
  }
});
