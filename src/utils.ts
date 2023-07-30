import predicate from './predicate';

const isEqual = (a: any, b: any): boolean => {
	const equality = {
		array:
			predicate.array(a) &&
			predicate.array(b) &&
			a.every((el, idx) => b[idx] === el),
		object:
			predicate.object(a) &&
			predicate.object(b) &&
			Array.from(new Set([...Object.keys(a), ...Object.keys(b)])).every(
				(key) =>
					a.hasOwnProperty(key) &&
					b.hasOwnProperty(key) &&
					isEqual(a[key as keyof typeof a], b[key as keyof typeof b])
			),
		nan: predicate.nan(a) && predicate.nan(b),
		set:
			!predicate.nullish(a) &&
			!predicate.nullish(b) &&
			predicate.set(a) &&
			predicate.set(b) &&
			Array.from(a).every((el) => b.has(el)),
		map:
			!predicate.nullish(a) &&
			!predicate.nullish(b) &&
			predicate.map(a) &&
			predicate.map(b) &&
			Array.from(a.keys()).every(
				(key) =>
					b.has(key) && b[key as keyof typeof b] === a[key as keyof typeof a]
			),
		other: a === b
	};
	return Object.values(equality).some(Boolean);
};

export { isEqual };
