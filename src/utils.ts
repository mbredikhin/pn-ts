const isObject = (value: any): value is object =>
	typeof value === 'object' && !Array.isArray(value) && value !== null;

const isEqual = (a: any, b: any): boolean => {
	const equality = {
		array:
			Array.isArray(a) &&
			Array.isArray(b) &&
			a.every((el, idx) => b[idx] === el),
		object:
			isObject(a) &&
			isObject(b) &&
			Object.keys(a).every(
				(key) =>
					a.hasOwnProperty(key) &&
					b.hasOwnProperty(key) &&
					(a as any)[key] === (b as any)[key]
			),
		nan: Number.isNaN(a) && Number.isNaN(b),
		set:
			Object.getPrototypeOf(a) === Set &&
			Object.getPrototypeOf(b) === Set &&
			Array.from(a as Set<any>).every((el) => b.has(el)),
		map:
			Object.getPrototypeOf(a) === Map &&
			Object.getPrototypeOf(b) === Map &&
			Array.from((a as Map<any, any>).keys()).every(
				(key) => b.has(key) && b[key] === a[key]
			),
		other: a === b
	};
	return Object.values(equality).some(Boolean);
};

export { isObject, isEqual };
