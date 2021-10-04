enum GenderType {
    Male,
    Female
}

interface Employee {
    ID: number,
    gender: GenderType 
}

function getEmployeeInfo (ID: number): Employee
 {
   return {
    ID: 1234,
    gender: GenderType.Female,

   }

}