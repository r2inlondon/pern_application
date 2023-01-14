export const getCandidates = async () => {
  let resArray = [];
  try {
    const res = await fetch("http://localhost:5000/candidates");
    resArray = await res.json();
  } catch (err) {
    console.error(err);
  }

  return resArray;
};

export const createCandidate = async (answers) => {
  let res = "";
  try {
    res = await fetch("http://localhost:5000/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });
  } catch (err) {
    console.error(err);
  }

  return res;
};

export const updateCandidate = async (id, data) => {
  let res = "";
  try {
    res = await fetch(`http://localhost:5000/candidates/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error(err);
  }
  return res;
};
