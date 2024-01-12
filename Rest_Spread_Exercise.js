const filterOutOdds = (... args) => args.filter(v => v%2 === 0);


const findMin = (...arguments) => Math.min(...arguments)


const mergeObject = (object1, object2) => ({...object1, ...object2})


const doubleAndReturnArgs = (array, ...arguments) => [...array, ...arguments.map(v => v*2)]


const removeRandomValue = items => {
  let index = Math.floor(Math.random()*items.length);
  return [...items.slice(0, index),...slice(index+1)];
}


const extend = (array1, array2) >= {
  return [...array1, ...array2];
}


const addPair = (object, key, value) => {
  let newObject = {...object};
  newObject[key] = value;
  return newObject;
}


const removeKey = (object, key) => {
let newObject = {...object};
delete newObject[key];
return newObject;
}


const combine = (object1, object2) => {
  return {...object1, ...object2}; 
}


const update = (object, key, value) => {
  let newObject = {...object};
  newObject[key] = value;
  return newObject;
}


