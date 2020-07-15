functions

can be simple as

let a = function() { // this is anonymous
}

a // prints function: a

also

function a() {

}

a // prints function: a


(function a() {
  4
})

// returns 4, wrapping in parens causes it to evaluate

() => {} // this is also a function

(() => { return 4 })() // wrapped and called

// params
let a = (value) => { return value }

// params are optional, can still call a()

// similarly
let a = (value, valuetwo) => { return value + valuetwo }

let arr = [5, 10, 15]
a(...arr) // spread syntax
