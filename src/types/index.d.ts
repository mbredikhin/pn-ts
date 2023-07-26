type Primitive = number | boolean | string | null | undefined;

type Pattern<T> = T extends Primitive | Array<any>
	? T
	: T extends object
	? Partial<T>
	: unknown;

type Predicate<T extends any> = (value: T) => boolean;
