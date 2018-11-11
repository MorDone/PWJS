var Vectors = {
  sum : function(a,b){
    if((a.length != b.length) || (Array.isArray(a) == false) || (Array.isArray(b == false))) {
      return false;
    }
    else {
      var c = [];
      for(var i=0;i<a.length;i++){
        c[i] = a[i] + b[i];
      }
    }
    return c;
  },
  mulByScalar : function(a,b) {
    if((Array.isArray(a) == false) || (isNaN(b) == true) || (Array.isArray(b) == true) || (b.length != undefined))
      return false;
    else{
      for(var i=0;i<a.length;i++){
        a[i] *= b;
      }
    }
    return a;
  }
}
