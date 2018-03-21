# connect-flash-light

This is a dead simple approach to flashing data, connect-middleware style. It is completely unopinionated and highly-versatile. If you've got something you would like to live until the next request, this should do the trick.

## Install

    $ npm install connect-flash-light

## Usage

### Express 4.x

`connect-flash-light` uses the session to store flash messages. So first, you will need to include the `session` middleware, which in turn requires the `cookieParser` middleware.

```javascript
var express      = require('express');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var flash        = require('connect-flash-light');

var app = express();

app.use(express.cookieParser());
app.use(express.session());
app.use(flash());
```

You can now use the `req.flash()` function to flash whatever you would like. To set messages, use the format `req.flash(key, value)`. The value can be an valid JavaScript value. To retrieve a message, use the format `req.flash(key)`.

#### A simple string value

```javascript
app.get('/flash', function(req, res) {
  req.flash('msg', 'Your message was flashed!');
  res.redirect('/');
});

app.get('/', function(req, res) {
  res.render('index', { messages: req.flash('msg') });
});
```

#### Form Handling

```javascript
app.post('/form', function(req, res) {
  // Pass the user input back
  req.flash('input', req.body);
  // Namespace messages, instead of just a simple string
  req.flash('msgs', {
    forms: {
      errors: {
        'There was a form error!'
      }
    }
  });
  res.redirect('/form');
});

app.get('/form', function(req, res) {
  var input = req.flash('input');
  var msgs = req.flash('msgs');
  res.render('form', {
    input: input,
    messages: msgs
  });
});
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright 2014 Elliot Fleming <[http://elliotfleming.com](http://elliotfleming.com)>