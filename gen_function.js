function* gen() {
	let a = 1;
	yield a++;
	console.log('----');
	yield a++;
	yield a++;
	console.log('----');
}

const g = gen();

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().done);

for (let x of g) console.log(x);