import { isEqual } from './utils';

class MatchExpression<I, O> {
	result!: O;
	constructor(private value: I) {}

	with<P extends Pattern<I> | Predicate<I>>(
		p: P,
		handler: (value: P) => O
	): MatchExpression<I, O> {
		const isMatched =
			(typeof p === 'function' && p(this.value)) || isEqual(this.value, p);
		if (isMatched) {
			this.result = handler(this.value as P);
		}
		return this;
	}

	run() {
		return this.result;
	}
}

const match = <T extends any>(value: T) => new MatchExpression(value);
export default match;
