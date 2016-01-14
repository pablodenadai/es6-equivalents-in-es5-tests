var test = require('tape')

test('ES6: block-scoping-functions-const', t => {
	'use strict'

	// `const` creates a read-only named constant in ES6.
	const a = 7

	// Attempt to overwrite the constant
	t.throws(() => {
		a = 15
	})

	// will still print 7
	t.is(a, 7)

	t.end()
})

test('ES5: block-scoping-functions-const', t => {
	'use strict'

	var foo = {}

	// Define `a` as a non-writable `constant` and give it the value 7
	Object.defineProperties(foo, {
		a: {
			value: 7,
			enumerable: true
		}
	})

	// Attempt to overwrite the constant
	t.throws(() => {
		foo.a = 15
	})

	// will still print 7
	t.is(foo.a, 7)

	t.end()
})
