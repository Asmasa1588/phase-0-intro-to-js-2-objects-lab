// Write your solution in this file!
const employee = { name: "Sam" };
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, keyParam) {
  return Object.entries(employee).reduce((newObject, [key, value]) => {
    if (keyParam === key) {
      return newObject;
    }
    return {
      ...newObject,
      [key]: value,
    };
  }, {});
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  employee[key] = undefined;
  return employee;
}
