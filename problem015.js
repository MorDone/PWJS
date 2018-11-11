var Stack = {
  push : function(a,b=1) {
    b -= 1;
    for (var i = 0; i <= b; i++) {
      if(i == b) {
        Stack[Stack.length] = a;
        Stack.length++;
      }
      else {
        Stack[Stack.length] = null;
        Stack.length++;
      }
    }
  },
  pop : function(a=1) {
    for (var i = a; i > 0; i--) {
      if(i == 1) {
        var c = Stack[Stack.length-1];
        delete Stack[Stack.length-1];
        Stack.length--;
        return c;
      }
      else {
        delete Stack[Stack.length-1];
        Stack.length--;
      }
    }
  },
  length:0
}
