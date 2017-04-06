
const whatIsInAName = function (collection, source) {

  //create array of objects keys
  var srcKeys = Object.keys(source);

  //filter collection with function provided in callback and pass in collection as an argument represented by the param obj in the callback
  return collection.filter(function (obj) {
    //for every item in the array srcKeys pass it into the call back function as key param
    return srcKeys.every(function (key) {
      //check to see if the collection aka obj has its own property of the source key and that properies value equals the source property value
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

module.exports = whatIsInAName;
