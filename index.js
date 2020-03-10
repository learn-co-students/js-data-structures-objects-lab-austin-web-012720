// Write your solution in this file!
const driver = {key: 'value'};
function updateDriverWithKeyAndValue(driver,key,value){
  const newdriver = Object.assign({}, driver);
  newdriver[key] = value;
  return newdriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
    driver[key]= value  ;
   return driver;
}
function deleteFromDriverByKey(driver, key){
  const neww = {...driver};
  delete neww[key];
  return neww;
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
