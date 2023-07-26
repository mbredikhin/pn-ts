const predicate = {
	nullish: (value: any) => [undefined, null].includes(value),
	number: (value: any) =>
		!predicate.nullish(value) &&
		Object.getPrototypeOf(value) === Number.prototype,
	nan: (value: any) => !predicate.nullish(value) && Number.isNaN(value),
	string: (value: any) =>
		!predicate.nullish(value) &&
		Object.getPrototypeOf(value) === String.prototype,
	boolean: (value: any) =>
		!predicate.nullish(value) &&
		Object.getPrototypeOf(value) === Boolean.prototype,
	set: (value: any) =>
		!predicate.nullish(value) && Object.getPrototypeOf(value) === Set.prototype,
	map: (value: any) =>
		!predicate.nullish(value) && Object.getPrototypeOf(value) === Map.prototype,
	array: (value: any) => !predicate.nullish(value) && Array.isArray(value),
	object: (value: any) =>
		!predicate.nullish(value) &&
		Object.getPrototypeOf(value) === Object.prototype,
	any: (value?: any) => true
};

export default predicate;
