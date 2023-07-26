import { match } from '../../index';

describe('matching by a value', () => {
	test('number', () => {
		const a = 1;
		const b = 1;
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBe(a);
	});

	test('string', () => {
		const a = 'some string';
		const b = 'some string';
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBe(a);
	});

	test('boolean', () => {
		const a = true;
		const b = true;
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBe(a);
	});

	test('array', () => {
		const a = [1, null];
		const b = [1, null];
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBe(a);
	});

	test('object', () => {
		const a = {
			name: 'Elon',
			age: 51
		};
		const b = {
			name: 'Elon',
			age: 51
		};
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBe(a);
	});
});

describe("doesn't matching by a value", () => {
	test('number', () => {
		const a = 1;
		const b = 10;
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBeUndefined();
	});

	test('string', () => {
		const a = 'some string';
		const b = 'another string';
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBeUndefined();
	});

	test('boolean', () => {
		const a = true;
		const b = false;
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBeUndefined();
	});

	test('array', () => {
		const a = [1, null];
		const b = [null, 1];
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBeUndefined();
	});

	test('object', () => {
		const a = {
			name: 'Elon',
			age: 51
		};
		const b = {
			name: 'Jeff',
			age: 58
		};
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBeUndefined();
	});
});

describe("doesn't matching by a value", () => {
	test('number', () => {
		const a = 1;
		const b = 10;
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBeUndefined();
	});

	test('string', () => {
		const a = 'some string';
		const b = 'another string';
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBeUndefined();
	});

	test('boolean', () => {
		const a = true;
		const b = false;
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBeUndefined();
	});

	test('array', () => {
		const a = [1, null];
		const b = [null, 1];
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBeUndefined();
	});

	test('object', () => {
		const a = {
			name: 'Elon',
			age: 51
		};
		const b = {
			name: 'Jeff',
			age: 58
		};
		const result = match(a)
			.with(b, (value) => value)
			.run();
		expect(result).toBeUndefined();
	});
});
