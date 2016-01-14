var test = require('tape')

test('arrow-function', t => {
	'use strict'

	t.same(
		[1, 2, 3].map(n => n * 2), // ES6
		[1, 2, 3].map(function (n) { return n * 2 }, this) // ES5
	)

	t.end()
})
