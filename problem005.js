function strangeSum(a, b) {
  if(isNaN(a) || isNaN(b) || a%1!=0 || b%1!=0)
    return null;
  else {
    if(a==b)
      return 3*(a+b);
    else
      return (a+b);
  }
}
