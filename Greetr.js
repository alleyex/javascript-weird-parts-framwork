(function (global, $) {

  // 'new' an object
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  }

  // hidden within the scope of the IIFE and 
  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessage = {
    en: 'Logged in',
    es: 'Inicio sesion'
  }


  Greetr.prototype = {
    fullName: function () {
      return this.firstname + ' ' + this.lastname;
    },

    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";

      }
    },

    greeting: function () {
      return greetings[this.language] + ' ' + this.firstname + '!';
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    greet: function (formal) {
      var msg;

      //if undefined or null will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time 
      // makes the method chainable
      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessage[this.language] + ': ' + this.fullName());
      }

      return this;
    },
    setLang: function (lang) {
      this.language = lang;
      this.validate();
      return this
    },
    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }

      if (!selector) {
        throw 'Miss selector';
      }

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);
      return this
    }
  };


  Greetr.init = function (firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';
    self.validate();
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;



}(window, jQuery));

