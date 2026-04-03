const scores = ["85", 92, "67", 40, 100, "30", 76, "90"];

function analyzeScores(scoresArray) {
  let excellentCount = 0;
  let passCount = 0;
  let failCount = 0;
  let total = 0;
  let sum = 0;

  for (let i = 0; i < scoresArray.length; i++) {
    const score = Number(scoresArray[i]);

    if (isNaN(score)) {
      continue;
    }

    total++;
    sum += score;
    if (score >= 90) {
      excellentCount++;
    } else if (score >= 60) {
      passCount++;
    } else {
      failCount++;
    }

    const status = score >= 60 ? "Pass" : "Fail";
  }

  const averageScore = total === 0 ? 0 : Number((sum / total).toFixed(2));

  return {
    totalStudents: total,
    excellent: excellentCount,
    pass: passCount,
    fail: failCount,
    averageScore: averageScore
  };
}

const result = analyzeScores(scores);
console.log(result);
