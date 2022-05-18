class Test {
	constructor() {
		this.a = 5;
	}

	m() {
		return this.a;
	}
}

const c = new Test;
console.log(c.m()); //=> 5