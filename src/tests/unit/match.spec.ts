import { match, predicate } from '../../index';

const emptyString = '';
const string = 'Some string';
const emptyArray: any[] = [];
const array = [1, 2, 3];
const emptyObject = {};
const object = {
	one: 1,
	two: 2,
	three: 3
};
const emptySet = new Set();
const set = new Set([1, 2, 3]);
const emptyMap = new Map();
const map = new Map([
	[1, 'one'],
	[2, 'two'],
	[3, 'three']
]);
const symbol = Symbol('s');

const values = [
	null,
	undefined,
	0,
	1,
	NaN,
	false,
	true,
	emptyString,
	string,
	emptyArray,
	array,
	emptyObject,
	object,
	emptySet,
	set,
	emptyMap,
	map,
	symbol
];

describe('with() method', () => {
	test('matches by value', () => {
		values.forEach((value) => {
			expect(
				match(value)
					.with(value, (value) => value)
					.run()
			).toStrictEqual(value);
		});
	});

	test('matches by predicate', () => {
		const entries = [
			{ predicate: predicate.nullish, expectation: [null, undefined] },
			{ predicate: predicate.number, expectation: [0, 1] },
			{ predicate: predicate.nan, expectation: [NaN] },
			{ predicate: predicate.boolean, expectation: [false, true] },
			{ predicate: predicate.string, expectation: [emptyString, string] },
			{ predicate: predicate.array, expectation: [emptyArray, array] },
			{ predicate: predicate.object, expectation: [emptyObject, object] },
			{
				predicate: { one: predicate.number, two: predicate.number },
				expectation: [object]
			},
			{
				predicate: { one: predicate.number, two: predicate.nan },
				expectation: []
			},
			{
				predicate: [predicate.number],
				expectation: [array]
			},
			{
				predicate: [predicate.number, predicate.number, 3],
				expectation: [array]
			},
			{
				predicate: [predicate.string],
				expectation: []
			},
			{
				predicate: [predicate.number, predicate.string, 3],
				expectation: []
			},
			{ predicate: predicate.set, expectation: [emptySet, set] },
			{ predicate: predicate.map, expectation: [emptyMap, map] },
			{ predicate: predicate.symbol, expectation: [symbol] },
			{ predicate: predicate.any, expectation: values }
		];
		entries.forEach(({ predicate, expectation }) => {
			const result: any[] = [];
			values.forEach((value) => {
				match(value)
					.with(predicate, (v) => result.push(v))
					.run();
			});
			expect(result).toStrictEqual(expectation);
		});
	});

	test('transforms a value', () => {
		const input = {
			name: 'Elon',
			age: 51
		};
		const output = {
			name: 'Elon',
			surname: 'Musk',
			age: 51
		};
		const result = match(input)
			.with(input, (value) => ({ ...value, surname: 'Musk' }))
			.run();
		expect(result).toStrictEqual(output);
	});
});

describe('otherwise() method', () => {
	test(`returns a value by itself if it's not being matched`, () => {
		const input = {
			name: 'Elon',
			age: 51
		};
		const result = match(input)
			.with(predicate.nullish, (value) => ({ ...value, surname: 'Musk' }))
			.otherwise((value) => value)
			.run();
		expect(result).toStrictEqual(input);
	});
});
