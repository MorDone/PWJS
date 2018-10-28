function findMax(a) {
    for(var i = 1;i<arguments.length;i++){
      if(a < arguments[i])
        a = arguments[i];
    }
    return a;
}
