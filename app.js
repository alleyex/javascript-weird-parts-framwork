


var g = G$('john', 'doe', 'es');

g.greet().setLang('es').greet(true).log();

$('#login').click(function () {
  var loginGrtr = G$('John', 'Doe');

  $('#logindiv').hide();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});



/* sec 5.60
var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function () {
    return 'hi ' + this.firstname;
  }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);


/* sec 5.59

String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
}

console.log("john".isLengthGreaterThan(4));

Number.prototype.isPositive = function () {
  return this > 0;
}

/* sec 5.58

function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function in invoked.');
}

Person.prototype.getFullName = function () {
  return this.firstname + ' ' + this.lastname;
}

var john = new Person('john', 'doe');
console.log(john);

var jane = new Person('jane', 'doe');
console.log(jane);

Person.prototype.getFormalFullName = function () {
  return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());








/* sec f4.51

function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    )
  };

  return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);


var arr2 = mapForEach(arr1, function (item) {
  return item * 2;
});

console.log(arr2);


var arr3 = mapForEach(arr1, function (item) {
  return item > 2;
});

console.log(arr3);

var arr4 = mapForEach(arr1, function (item) {
  return item / 2;
});

console.log(arr4);


var checkPastLimit = function (limiter, item) {
  return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

console.log(arr4);

var checkPastLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);



/* section 4.48
function sayHiLater() {
  var greeting = 'hi';
  console.log('sayhi closed');

  setTimeout(function () {
    console.log(greeting);
  }, 3000)
}


sayHiLater();






/*
function buildFunction() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      function () {
        console.log(i);
      }
    )
  }
  return arr;
}

var fs = buildFunction();
fs[0]();
fs[1]();
fs[2]();


function buildFunction2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        }

      }(i)
      )
    )
  }
  return arr;
}

var fs2 = buildFunction2();
fs2[0]();
fs2[1]();
fs2[2]();



/* section 4.37

function a() {
  console.log(this);
  this.newvariable = 'hello';
}
var b = function () {
  console.log(this);
}

a();

console.log(newvariable);

b();

var c = {
  name: 'The c object',
  log: function () {
    var self = this;
    self.name = 'updated c object';
    console.log(self);

    var setname = function (newname) {
      self.name = newname;
    }
    setname('updated again! The c object');
    console.log(self);
  }
}

c.log();



/*section 4.36

// by value (primitives)
var a = 3;
var b;

b = a;

a = 2;
console.log(a);
console.log(b);

// by reference (all objects inculding functions)
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
  obj.greeting = 'Hola';
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new menory space (new address)
c = { greeting: 'howdy' };

console.log(c);
console.log(d);



/* section 4.35
greet();

function greet() {
  console.log('hi');
}

var anonymousGreet = function () {
  console.log('hi');
}

anonymousGreet();

function log(a) {
  a();
}

log(function () {
  console.log('hi')
})

*/

/* section 4.34
function greet() {
  console.log('hi');
}

greet.language = 'english';
console.log(greet.language);
*/

/* secsion 4.33
var objectLiteral = {
  firstname: 'Mary',
  isAProgrammmer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname":"Mary", "isAProgrammer":true }');

console.log(jsonValue);
*/



/* secsion 4.33
var greet = 'Hello';
var greet = 'hola';

console.log(greet);

var english = {
  greeting: {
    basic: 'Hello!'
  }
};
var spanish = {};

// english.greeting = {};
// english.greeting.greet = 'Hello!';
// english.greet = 'Hello!';
// spanish.greet = 'Hola!';

console.log(english);
*/





/* section 4.2
var Tony = {
  firstname: 'Tony',
  lastname: 'Alicea',
  address: {
    street: '111 Main St.',
    ctiy: 'New York',
    state: 'NY'
  }
};

function greet(person) {
  console.log('hi ' + person.firstname);
}

greet(Tony);

greet({
  firstname: 'Mary',
  lastname: 'Doe'
});
*/








/*  secsion 4.1
var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 main st.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);

console.log(person["address"]["city"])
*/