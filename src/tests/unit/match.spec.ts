import { match, predicate } from '../../index';

describe('with() method', () => {
	test('matching by value', () => {
		[
			null,
			undefined,
			0,
			NaN,
			'',
			false,
			new Set(),
			new Map([]),
			[],
			{}
		].forEach((value) => {
			expect(
				match(value)
					.with(value, (value) => value)
					.run()
			).toStrictEqual(value);
		});
	});

	test('matching by predicate', () => {
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
	test('returns a value by itself if it was not matched', () => {
		const input = {
			name: 'Elon',
			age: 51
		};
		const result = match(input)
			.with(predicate.nullish, (value) => ({ ...value, surname: 'Musk' }))
			.otherwise((value) => value);
		expect(result).toStrictEqual(input);
	});
});
