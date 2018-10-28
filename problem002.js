function stringRotate(a, b) {
  if(isNaN(b) || b<0)
    return "";
  else {
    var array = a.split("");
    var d = array.length;
    for(var i=0;i<b;i++){
      var n = array[0];
      array.shift();
      array.push(n);
    }
    array = array.join("");
    return array;
  }
}
