function getTotalNumberOfNewYaersEveSundays(a, b) {
  var x = 0;
  var l = b-a;
  for(var i=0;i<=l;i++){
    var p = a+i;
    var d = new Date('January 1,'+p);
    if(d.getDay() == 0)
      x++;
  }
  return x;
}
