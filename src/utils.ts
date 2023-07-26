import predicate from './predicate';

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
			!predicate.nullish(a) &&
			!predicate.nullish(b) &&
			Object.getPrototypeOf(a) === Set.prototype &&
			Object.getPrototypeOf(b) === Set.prototype &&
			Array.from(a as Set<any>).every((el) => b.has(el)),
		map:
			!predicate.nullish(a) &&
			!predicate.nullish(b) &&
			Object.getPrototypeOf(a) === Map.prototype &&
			Object.getPrototypeOf(b) === Map.prototype &&
			Array.from((a as Map<any, any>).keys()).every(
				(key) => b.has(key) && b[key] === a[key]
			),
		other: a === b
	};
	return Object.values(equality).some(Boolean);
};

export { isObject, isEqual };
