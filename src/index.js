export default function orderByProps(obj, sort) {
  let sortArray = [];
  const returnValue = [];

  for (const prop in obj) {
    if (!sort.includes(prop)) {
      sortArray.push(prop);
    }
  }

  sortArray.sort();
  sortArray = sort.concat(sortArray);

  for (const prop of sortArray) {
    returnValue.push({ key: prop, value: obj[prop] });
  }

  return returnValue;
}
