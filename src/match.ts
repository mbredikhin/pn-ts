import { isEqual } from './utils';

const isMatching = <I, P extends Pattern<I> | Predicate<I>>(p: P, value: I) =>
	typeof p === 'function' ? p(value) : isEqual(value, p);

class MatchExpression<I, O> {
	result!: O;
	constructor(private value: I) {}

	with<P extends Pattern<I> | Predicate<I>>(
		p: P,
		handler: (value: I) => O
	): MatchExpression<I, O> {
		if (isMatching(p, this.value)) {
			this.result = handler(this.value);
		}
		return this;
	}

	otherwise(handler: (value: I) => O): MatchExpression<I, O> {
		this.result = handler(this.value);
		return this;
	}

	run() {
		return this.result;
	}
}

const match = <T extends any>(value: T) => new MatchExpression(value);
export { match, isMatching };
