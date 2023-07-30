const predicate = {
	nullish: <T extends undefined | null>(value: any): value is T =>
		[undefined, null].includes(value),
	number: (value: any): value is number =>
		!predicate.nullish(value) &&
		!Number.isNaN(value) &&
		Object.getPrototypeOf(value) === Number.prototype,
	nan: (value: any): value is typeof NaN =>
		!predicate.nullish(value) && Number.isNaN(value),
	string: (value: any): value is string =>
		!predicate.nullish(value) &&
		Object.getPrototypeOf(value) === String.prototype,
	boolean: (value: any): value is boolean =>
		!predicate.nullish(value) &&
		Object.getPrototypeOf(value) === Boolean.prototype,
	set: (value: any): value is Set<any> =>
		!predicate.nullish(value) && Object.getPrototypeOf(value) === Set.prototype,
	map: (value: any): value is Map<any, any> =>
		!predicate.nullish(value) && Object.getPrototypeOf(value) === Map.prototype,
	array: (value: any): value is Array<any> =>
		!predicate.nullish(value) && Array.isArray(value),
	object: (value: any): value is object =>
		!predicate.nullish(value) &&
		Object.getPrototypeOf(value) === Object.prototype,
	symbol: (value: any): value is Symbol =>
		!predicate.nullish(value) &&
		Object.getPrototypeOf(value) === Symbol.prototype,
	function: (value: any): value is Function =>
		!predicate.nullish(value) &&
		Object.getPrototypeOf(value) === Function.prototype,
	any: (value?: any) => true
};

export default predicate;
