function reverse(a) {
	return function() {
		var args = Array.from(arguments).reverse();
		return a.apply(this, args);
	}
}
