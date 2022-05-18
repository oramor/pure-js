function fn2(p1, p2) {
	console.log(p1 + p2);
}

function fn1 (...args) {
	fn2(...args)
}

fn1(2, 5); //=> 7