const isEqual = (object, objectToCompare) => JSON.stringify(object) === JSON.stringify(objectToCompare);

export default isEqual;
