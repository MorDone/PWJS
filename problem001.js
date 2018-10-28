function triangleArea(a, b, c) {

    if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0 || isNaN(c) || c <= 0 || a+b<=c || b+c<=a || c+a<=b)
      return -1;
    else {
      var s = (a+b+c)/2;
      var x = Math.round(Math.sqrt(s*(s-a)*(s-b)*(s-c))*100)/100;
      return x;
    }
}
