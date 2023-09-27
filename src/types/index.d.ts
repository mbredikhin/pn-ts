declare module 'pn-ts';

type Primitive = number | boolean | string | null | undefined;

type Pattern<T> = T extends Primitive | Array<any>
	? T
	: T extends object
	? Partial<{ [K in keyof T]: T[K] | Predicate<T[K]> }>
	: unknown;

type Predicate<T extends any> = (value: T) => boolean;
