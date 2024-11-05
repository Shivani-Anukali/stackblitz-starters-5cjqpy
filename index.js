// Sample data
const students = [
  { name: "Alice", chemistry: 85, biology: 90, dob: "15-05-2000" },
  { name: "Bob", chemistry: 90, biology: 85, dob: "12-04-2000" },
  { name: "Charlie", chemistry: 85, biology: 90, dob: "15-05-2000" },
  { name: "David", chemistry: 80, biology: 80, dob: "20-01-2000" }
];

// Function to convert date of birth to a comparable format
const parseDOB = (dob) => {
  const [day, month, year] = dob.split('-');
  return new Date(year, month - 1, day); // Months are 0-indexed
};

// Sorting function
students.sort((a, b) => {
  const totalMarksA = a.chemistry + a.biology;
  const totalMarksB = b.chemistry + b.biology;

  if (totalMarksA !== totalMarksB) {
      return totalMarksB - totalMarksA; // Sort by total marks descending
  }

  if (a.biology !== b.biology) {
      return b.biology - a.biology; // Sort by biology marks descending
  }

  // If total marks and biology marks are the same, maintain original order
  return parseDOB(a.dob) - parseDOB(b.dob); // Sort by date of birth ascending
});

// Display sorted students
console.log(students);
