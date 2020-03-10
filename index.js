// Write your solution in this file!
let driver = {}

// function updateDriverWithKeyAndValue(driver, key, value) {
//     const newDriver = { ...driver };
    
//     newDriver[key] = value;
 
//     return newDriver;
// }

function updateDriverWithKeyAndValue(object, key, value) {
    const newDriver = { ...object };
    
    newDriver[key] = value;
 
    return newDriver;
}



function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    const newDriver = obj;
    newDriver[key] = value;
    return newDriver
}

function deleteFromDriverByKey(obj, key, value){
    const newDriver = { ...obj };
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(obj, key, value){
    const newDriver = obj
    delete newDriver[key]
    return newDriver

}