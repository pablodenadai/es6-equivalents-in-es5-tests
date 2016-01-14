import test from 'ava';

test('ES6: block-scoping-functions-let', t => {
	/**
	 * `let` declares a block scope local variable,
	 * optionally initializing it to a value in ES6
	 */
	var a = 5;
	var b = 10;

	if (a === 5) {
		let a = 4; // The scope is inside the if-block
		var b = 1; // The scope is inside the function

		t.is(a, 4);
		t.is(b, 1);
	}

	t.is(a, 5);
	t.is(b, 1);
});

test('ES5: block-scoping-functions-let', t => {
  var a = 5;
  var b = 10;

  if (a === 5) {
    // technically is more like the following
    (function () {
      var a = 4;
      b = 1;

      t.is(a, 4);
  		t.is(b, 1);
    })();
  }

  t.is(a, 5);
	t.is(b, 1);
})
