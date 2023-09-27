# pn-ts

Easy to use, lightweight [pattern matching](https://en.wikipedia.org/wiki/Pattern_matching) library.

## Installation

```bash
npm install pn-ts
```

## Usage

pn-ts is quite simple to use. Here are some examples:

```typescript
import { match, predicate } from 'pn';
import { getFruits } from './fruit';

type Fruit = {
	pulp: 'orange' | 'red' | 'light-green';
	skin: 'orange' | 'red' | 'brown';
};

const getFruits = (count: number): Fruit[] => {
	const pulps: Fruit['pulp'][] = ['orange', 'red', 'light-green'];
	const skins: Fruit['skin'][] = ['orange', 'red', 'brown'];
	return new Array({ length: count }).map((_, index) => ({
		pulp: pulps[pulps.length % index],
		skin: skins[skins.length % index]
	}));
};

const fruits = getFruits(42);
const strawberry: Fruit = {
	pulp: 'red',
	skin: 'red'
};
const tangerine: Fruit = {
	pulp: 'orange',
	skin: 'orange'
};
const kiwi: Fruit = {
	pulp: 'light-green',
	skin: 'brown'
};

fruits.forEach((fruit) => {
	const message = match(fruit)
		.with(strawberry, () => `It's 🍓`)
		.with(tangerine, () => `It's 🍊`)
		.with(kiwi, () => `It's 🥝`)
		.otherwise(
			({ pulp, skin }) =>
				`Fruit with ${pulp} pulp and ${skin} skin is unknown to us.
        Let's put it back in the 📦.`
		)
		.run();
	console.log(message);
});
```

## Local development

```bash
git clone git@github.com:mbredikhin/pn-ts.git
cd pn-ts
npm install
npm run dev
```

## Run tests

```bash
npm run test
```

## Production build

```bash
npm run build
```

## Author

[Maxim Bredikhin](https://github.com/mbredikhin)
