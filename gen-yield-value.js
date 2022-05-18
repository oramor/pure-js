function* gen() {
	let value = 1;
	yield value
	const a = yield value;
	console.log(a);
	yield a;
}

const fn = gen();

// fn.next();
// fn.next(5);
// fn.next();

console.log(fn.next());
console.log(fn.next());
console.log(fn.next(5));
console.log(fn.next());