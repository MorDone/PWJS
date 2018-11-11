function deepFindAndCount(a, b) {
  var c = JSON.stringify(a);
  var d = new RegExp(b,'g');
  var count = (c.match(d) || []).length;
  return count
}
