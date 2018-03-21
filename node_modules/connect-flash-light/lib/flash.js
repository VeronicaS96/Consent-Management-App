var _flash;

_flash = function(key, value) {
  var current, old;
  old = this.session.flash.old;
  current = this.session.flash.current;
  if (key && value) {
    return current[key] = value;
  } else if (key) {
    return old[key] || null;
  } else {
    return old;
  }
};

module.exports = function() {
  return function(req, res, next) {
    req.session.flash = req.session.flash || {};
    req.session.flash.old = req.session.flash.current || {};
    req.session.flash.current = {};
    req.flash = _flash;
    return next();
  };
};