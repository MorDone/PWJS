function compose() {
	var a = arguments;
	return function(x) {
		var r = x;
		for (var i = a.length - 1; i >= 0; i--) {
			r = a[i](r);
		}
		return r;
	}
}
