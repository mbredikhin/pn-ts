const predicates = {
	empty: (value: any) => [undefined, null].includes(value),
	number: (value: any) =>
		!predicates.empty(value) &&
		Object.getPrototypeOf(value) === Number.prototype,
	nan: (value: any) => !predicates.empty(value) && Number.isNaN(value),
	string: (value: any) =>
		!predicates.empty(value) &&
		Object.getPrototypeOf(value) === String.prototype,
	boolean: (value: any) =>
		!predicates.empty(value) &&
		Object.getPrototypeOf(value) === Boolean.prototype,
	set: (value: any) =>
		!predicates.empty(value) && Object.getPrototypeOf(value) === Set.prototype,
	map: (value: any) =>
		!predicates.empty(value) && Object.getPrototypeOf(value) === Map.prototype,
	array: (value: any) => !predicates.empty(value) && Array.isArray(value),
	object: (value: any) =>
		!predicates.empty(value) &&
		Object.getPrototypeOf(value) === Object.prototype,
	any: (value?: any) => true
};

export default predicates;
