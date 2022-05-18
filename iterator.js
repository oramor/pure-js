class Iter {
	constructor(max) {
		this.max = max;
	}

	// Метод итератора
	[Symbol.iterator]() {
		let next = 1;
		
		// Объект итератора
		return {
			next: () => {
				return (next <= this.max)
					// Объект результата итерации
					? { value: next++ }
					: { done: true };
			},
    	}
  	}
}

for (let x of new Iter(5)) console.log(x);