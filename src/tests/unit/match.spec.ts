import { match, predicate } from '../../index';

describe('with() method', () => {
	test('matches by value', () => {
		[
			null,
			undefined,
			0,
			NaN,
			'',
			'Some string',
			false,
			true,
			new Set(),
			new Set([1, 2, 3]),
			new Map([
				[1, 'one'],
				[2, 'two'],
				[3, 'three']
			]),
			[],
			[1, 2, 3],
			{},
			{
				one: 1,
				two: 2,
				three: 3
			}
		].forEach((value) => {
			expect(
				match(value)
					.with(value, (value) => value)
					.run()
			).toStrictEqual(value);
		});
	});

	test('matches by predicate', () => {
		[
			{ predicate: predicate.nullish, value: null },
			{ predicate: predicate.nullish, value: undefined },
			{ predicate: predicate.number, value: 0 },
			{ predicate: predicate.nan, value: NaN },
			{ predicate: predicate.string, value: '' },
			{ predicate: predicate.boolean, value: false },
			{ predicate: predicate.set, value: new Set() },
			{ predicate: predicate.map, value: new Map() },
			{ predicate: predicate.array, value: [] },
			{ predicate: predicate.object, value: {} },
			{ predicate: predicate.any, value: {} }
		].forEach(({ predicate, value }) => {
			const result = match(value)
				.with(predicate, (value) => value)
				.run();
			expect(result).toStrictEqual(value);
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
