/* global describe, it, expect, afterEach, beforeEach, inject */

describe('duration filter - module test', function() {

  beforeEach(angular.mock.module('angular-duration-format.filter'));

  it('should have a "duration" filter', inject(function($filter) {
    expect($filter('duration')).toBeDefined();
  }));

});

describe('duration filter - unit tests', function() {
  var ms = 1;
  var s = 1000 * ms;
  var m = 60 * s;
  var h = 60 * m;
  var d = 24 * h;
  var y = 365 * d;

  beforeEach(function() {
    Date.__now__ = Date.now;
    Date.now = function() {
      return 1368817912431;
    };

    angular.mock.module('angular-duration-format.filter');
  });

  afterEach(function() {
    Date.now = Date.__now__;
  });

  it('should return provided value if it is not parsable to number', inject(function($filter) {
    var duration = $filter('duration');

    expect(duration({}, 'sss')).toEqual({});
    expect(duration('abc', 'sss')).toEqual('abc');
    expect(duration('x123', 'sss')).toEqual('x123');
    expect(duration('', 'sss')).toEqual('');
  }));

  it('should convert durationstamp to miliseconds', inject(function($filter) {
    var duration = $filter('duration');

    expect(duration((0 * ms).toString(), 'sss')).toEqual('0');
    expect(duration((0 * ms).toString(), 'ssss')).toEqual('0000');

    expect(duration((123 * ms).toString(), 'sss')).toEqual('123');
    expect(duration((123 * ms).toString(), 'ssss')).toEqual('0123');

    expect(duration((123456 * ms).toString(), 'sss')).toEqual('123456');
    expect(duration((123456 * ms).toString(), 'ssss')).toEqual('123456');

  }));

  it('should convert durationstamp to seconds', inject(function($filter) {
    var duration = $filter('duration');

    expect(duration((0.999 * s).toString(), 's')).toEqual('0');
    expect(duration((0.999 * s).toString(), 'ss')).toEqual('00');

    expect(duration((2 * s).toString(), 's')).toEqual('2');
    expect(duration((2 * s).toString(), 'ss')).toEqual('02');

    expect(duration((600 * s).toString(), 's')).toEqual('600');
    expect(duration((600 * s).toString(), 'ss')).toEqual('600');

  }));

  it('should convert durationstamp to minutes', inject(function($filter) {
    var duration = $filter('duration');

    expect(duration((0.999 * m).toString(), 'm')).toEqual('0');
    expect(duration((0.999 * m).toString(), 'mm')).toEqual('00');

    expect(duration((2 * m).toString(), 'm')).toEqual('2');
    expect(duration((2 * m).toString(), 'mm')).toEqual('02');

    expect(duration((600 * m).toString(), 'm')).toEqual('600');
    expect(duration((600 * m).toString(), 'mm')).toEqual('600');

  }));

  it('should convert durationstamp to hours', inject(function($filter) {
    var duration = $filter('duration');

    expect(duration((0.999 * h).toString(), 'h')).toEqual('0');
    expect(duration((0.999 * h).toString(), 'hh')).toEqual('00');

    expect(duration((2 * h).toString(), 'h')).toEqual('2');
    expect(duration((2 * h).toString(), 'hh')).toEqual('02');

    expect(duration((600 * h).toString(), 'h')).toEqual('600');
    expect(duration((600 * h).toString(), 'hh')).toEqual('600');

  }));

  it('should convert durationstamp to days', inject(function($filter) {
    var duration = $filter('duration');

    expect(duration((0.999 * d).toString(), 'd')).toEqual('0');
    expect(duration((0.999 * d).toString(), 'dd')).toEqual('00');

    expect(duration((2 * d).toString(), 'd')).toEqual('2');
    expect(duration((2 * d).toString(), 'dd')).toEqual('02');

    expect(duration((600 * d).toString(), 'd')).toEqual('600');
    expect(duration((600 * d).toString(), 'dd')).toEqual('600');

  }));

  it('should convert durationstamp to years', inject(function($filter) {
    var duration = $filter('duration');

    expect(duration((0.999 * y).toString(), 'y')).toEqual('0');
    expect(duration((0.999 * y).toString(), 'yy')).toEqual('00');

    expect(duration((2 * y).toString(), 'y')).toEqual('2');
    expect(duration((2 * y).toString(), 'yy')).toEqual('02');

    expect(duration((600 * y).toString(), 'y')).toEqual('600');
    expect(duration((600 * y).toString(), 'yy')).toEqual('600');
  }));

  it('should allow to mix formats', inject(function($filter) {
    var duration = $filter('duration');
    var number = 1 * y + 30 * d + 10 * h + 7 * m + 13 * s + 190 * ms;
    var format = 'y d hh mm ss sss';

    expect(duration(number.toString(), format)).toEqual('1 30 10 07 13 190');
  }));

  it('should allow to use separators with reserved letters if they are in quotation marks', inject(function($filter) {
    var duration = $filter('duration');
    var number = 1 * y + 30 * d + 10 * h + 7 * m + 13 * s + 190 * ms;
    var format = 'y \'y\' d \'d\' h \'h\' m \'m\' s \'s\' sss \'m\'';

    expect(duration(number.toString(), format)).toEqual('1 y 30 d 10 h 7 m 13 s 190 m');
  }));
});
