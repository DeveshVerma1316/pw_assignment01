const marks = [ 49];


function calculateGrade(marks) {

  let summ = 0;

  for (let i = 0; i < marks.length; i++) {
    summ += marks[i];
  }
  const avg = summ / marks.length;
  let grade = '';
  if (avg < 50) {
    grade = 'F';
  } else if (avg <= 70) {
    grade = 'c';
  } else if (avg <= 90) {
    grade = 'b';
 
  } else {
    grade = 'A';
  }
  return grade;
}

console.log(calculateGrade(marks));

 