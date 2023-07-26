import match from './match';
import predicates from './predicates';

export { match, predicates };

// const match = <T extends any>(value: T) => new MatchExpression(value);
// const value: ('a' | 'b')[] = ['b'];
// const result = match(value)
// 	.with(['a'], (matched) => `This is ${matched}!`)
// 	.with(['b'], () => `This is something else`)
// 	.run();

// console.log(result);
