import test from 'ava';

test('ES6: arrow-function', t => {
	var es6 = [1, 2, 3].map(n => n * 2);
	t.same(es6, [2, 4, 6]);
});

test('ES5: arrow-function ', t => {
	var es5 = [1, 2, 3].map(function (n) {
		return n * 2;
	}, this);
	t.same(es5, [2, 4, 6]);
});
