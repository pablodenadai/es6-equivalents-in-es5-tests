import test from 'ava';

test('ES6: block-scoping-functions-const', t => {
	'use strict';

	// `const` creates a read-only named constant in ES6.

	// Define `favorite` as a constant and give it the value 7
	const favorite = 7;

	// Attempt to overwrite the constant
	try {
	  favorite = 15;
	} catch (err) {
		// will still print 7
		t.is(favorite, 7);
	}
});

test('ES5: block-scoping-functions-const', t => {
	'use strict';

	// Define `favorite` as a non-writable `constant` and give it the value 7
	Object.defineProperties(window, {
	  favorite: {
	    value: 7,
	    enumerable: true
	  }
	});
	// ^ descriptors are by default false and const are enumerable

	var favorite = 7;

	// Attempt to overwrite the constant
	favorite = 15;

	// will still print 7
	t.is(favorite, 7);
})
