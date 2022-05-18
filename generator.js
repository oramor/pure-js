class Gen {
	static *fn() {
		yield 1;
		yield 2;
		yield 3;
	}
}

for (let x of Gen.fn()) console.log(x); //=> 1 2 3