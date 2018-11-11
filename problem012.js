function objectsDiff(a, b) {
  var tab = [];
  var f = true;
  for(var property in a){
    f = true;
    for(var property2 in b){
      if(property == property2){
        f = false;
        break;
      }
    }
    if(f){
      tab.push(property);
    }
  }
  for(var property in b){
    f = true;
    for(var property2 in a){
      if(property == property2){
        f = false;
        break;
      }
    }
    if(f){
      tab.push(property);
    }
  }
  return tab;
}
