function getGrade(score){
    let grade;
   if(score >= 90){
    grade = "A"
   }else if(score >= 80) {
    grade = "B"
   }else if(score >= 70) {
    grade = "C"
   }else if (score <= 50){
    grade ="F"
   }
     return grade
}

console.log (getGrade(95));  
console.log(getGrade(83));  
console.log(getGrade(70));
console.log(getGrade(45))  
