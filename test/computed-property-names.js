/**
 * ### Computed Property Names
 * Computed property names allow you to specify
 * properties in object literals based on expressions:
 */

var test = require('tape')

test('computed-property-names', t => {
  var prefix = 'foo'

  var es6 = {
    [prefix + 'bar']: 'hello',
    [prefix + 'baz']: 'world'
  }

  var es5 = {}
  es5[prefix + 'bar'] = 'hello'
  es5[prefix + 'baz'] = 'world'

  t.is(es6.foobar, es5.foobar)
  t.is(es6.foobaz, es5.foobaz)

  t.end()
})
