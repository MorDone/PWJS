function parametricSort(a, b) {

  if(b != 'desc' && b != 'asc') {
    return false;
  }
  else if(b == 'asc' ){
    var a = a.sort(compare);
  }
  else {
    var a = a.sort(compare)
    a.reverse();
  }
  return a;
}

function compare(a,b){
  return a-b;
}
