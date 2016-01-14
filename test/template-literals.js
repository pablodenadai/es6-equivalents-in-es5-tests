var test = require('tape')

test('template-literals', t => {
  // Basic usage with an expression placeholder
  var person = 'Addy Osmani'
  t.is(
    `Yo! My name is ${person}!`, // ES6
    'Yo! My name is ' + person + '!' // ES5
  )

  // Expressions work just as well with object literals
  var user = { name: 'Caitlin Potter' }
  t.is(
    `Thanks for getting this into V8, ${user.name}.`, // ES6
    'Thanks for getting this into V8, ' + user.name + '.' // ES5
  )

  // Expression interpolation. One use is readable inline math.
  var a = 50
  var b = 100
  t.is(
    `The number of JS frameworks is ${a + b} and not ${2 * a + b}.`, // ES6
    'The number of JS frameworks is ' + (a + b) + ' and not ' + (2 * a + b) + '.' // ES5
  )

  // Multi-line strings without needing \n\
  t.is(
    `string text line 1
    string text line 2`,
    'string text line 1\n    string text line 2'
  )

  // Functions inside expressions
  function fn() { return 'result' }
  t.is(
    `foo ${fn()} bar`,
    'foo ' + fn() + ' bar'
  )
  
  t.end()
})
