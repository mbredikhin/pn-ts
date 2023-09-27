declare const isMatching: <I, P extends Pattern<I> | Predicate<I>>(p: P, value: I) => boolean;
declare class MatchExpression<I, O> {
    private value;
    result: O;
    constructor(value: I);
    with<P extends Pattern<I> | Predicate<I>>(p: P, handler: (value: I) => O): MatchExpression<I, O>;
    otherwise(handler: (value: I) => O): MatchExpression<I, O>;
    run(): O;
}
declare const match: <T extends unknown>(value: T) => MatchExpression<T, unknown>;
export { match, isMatching };
