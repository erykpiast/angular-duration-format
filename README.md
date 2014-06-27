angular-time-format
===================

AngularJS filter for formatting time.

# Usage #
Add `angular-time-format` as your app dependency.

```
  angular.module('myModule', [
    angular-time-format'
  ]);
```

In templates you can use
```
  <p>
    Time passed: {{ passed | time:'hh:mm:ss:sss' }}<br/>
    Preformatted: {{ passedPre }}
  </p>
```

In controllers (or directives, services, everywhere)
```
  angular.module('myModule').controller('exampleCtrl', function($scope, $filter) {
    var timeFilter = $filter('time');
    
    $scope.passed = 123456789;
    $scope.passedPre = timeFilter($scope.passed, 'hh:mm:ss:sss');
  });
```

The result should be the same for both cases:
  
  Time passed: 34:17:36:789
  Preformatted: 34:17:36:789
  
