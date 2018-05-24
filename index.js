var recipes ={key1 : 'value1'}

function updateObjectWithKeyAndValue(object, key, value){
 var newObject = Object.assign ({}, object, {[key] : value})
 return newObject;
}

function
