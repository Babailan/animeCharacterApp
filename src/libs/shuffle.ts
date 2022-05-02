// shuffle array of element :<

function shuffle(array: Array<any>) {
  for (var i = 0; i < array.length; i++) {
    var j = Math.floor(Math.random() * array.length);
    var g = array[i];

    array[i] = array[j];
    array[j] = g;
  }
  return array;
}

export default shuffle;
