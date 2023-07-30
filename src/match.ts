import predicate from './predicate';
import { isEqual } from './utils';

const isMatching = <I, P extends Pattern<I> | Predicate<I>>(
	p: P,
	value: I
): boolean => {
	if (predicate.function(p)) {
		return p(value);
	}
	if (
		((predicate.object(value) && predicate.object(p)) ||
			(predicate.array(value) && predicate.array(p))) &&
		Object.keys(value).length &&
		Object.keys(p).length &&
		Object.keys(p).every((key) => key in value)
	) {
		return Object.keys(p).every((key) =>
			isMatching(p[key as keyof P], value[key as keyof I])
		);
	}
	return isEqual(value, p);
};

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
