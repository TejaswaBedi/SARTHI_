export function addToApply(company) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/applied", {
      method: "POST",
      body: JSON.stringify(company),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
  // On backend it will not store password
}

export function fetchCompaniesByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/applied?user=" + userId
    );
    const data = await response.json();
    resolve({ data });
  });
}
