 function logname (name: string){
     console.log(name);
 }

 logname('Micela');

 console.log('hello world');
 
function getStudent (ID: number):any
{
  return null; 
}   

interface Student {
  studentID: number;
  studentName: string;
  age: number
}

function getStudentInfo (studentID: number): Student
 {
   return {
    studentID: 1234,
    studentName: 'Mike',
    age: 30
   }

}

  