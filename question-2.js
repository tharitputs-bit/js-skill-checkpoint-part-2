const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

const studentsOver50Score = students.filter((student) => student.score > 50);

const add10Persent = studentsOver50Score.map((student) => student.score * 1.1);

const totalScore = add10Persent.reduce((sum,score) => sum+score,0);

console.log(`Total score is ${totalScore}`);
