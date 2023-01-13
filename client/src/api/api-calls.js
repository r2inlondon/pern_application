export const getCandidates = async () => {
  let candidatesArray = [];
  try {
    const res = await fetch("http://localhost:5000/candidates");
    candidatesArray = await res.json();
  } catch (err) {
    console.error(err);
  }

  return candidatesArray;
};

export const createCandidate = async (answers) => {
  let newCandidate = "";
  try {
    newCandidate = await fetch("http://localhost:5000/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });
  } catch (err) {
    console.error(err);
  }

  return newCandidate;
};
