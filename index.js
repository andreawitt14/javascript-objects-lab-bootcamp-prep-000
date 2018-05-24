var recipes ={key1 : 'value1'}

function updateObjectWithKeyAndValue(object, key, value){
   var newObject = Object.assign({key : value}, object)
   return newObject;
}
