function divisible(a) {
  var x = true;
  for(var i = 1;i<arguments.length;i++){
    if(a%arguments[i]!=0)
      x = false;
  }
  return x;
}
