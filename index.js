// Write your solution in this file!
const employee = {
   name: `antony`,
   streetAddress: `nairobi`,
 };
 
 
 
 function updateEmployeeWithKeyAndValue(employee,key,value){
   let updatedEmployee = {...employee}
   updatedEmployee[key] = value;
   return updatedEmployee;
 }
 
   const updatedEmployee = updateEmployeeWithKeyAndValue(employee,"tula","section2");
 
   console.log(updatedEmployee);
 
 
 
 
 function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key] = value;
   return employee;
 }
 
   const destructivelyUpdateEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"sex","male");
 
   console.log(destructivelyUpdateEmployee);
 
 
 
 
 
 function deleteFromEmployeeByKey(employee, key){
   const newEmployee = {...employee}
   delete newEmployee[key];
   return newEmployee;
 }
 
   const newEmployee = deleteFromEmployeeByKey(employee, "name");
   console.log(newEmployee);
 
 
 // destructivelyDeleteFromEmployeeByKey(employee, key)
 
 function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key];
   return employee;
 }
 
   const newEmployee2 = destructivelyDeleteFromEmployeeByKey(employee,"streetAddress");
   console.log(newEmployee2);
  