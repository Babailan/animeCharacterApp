function RemoveElementsDuplicated(array: any) {
  array = array.slice(0, 20);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      }
      if (array[i].entry[0].title === array[j].entry[0].title) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return array;
}

export default RemoveElementsDuplicated;
