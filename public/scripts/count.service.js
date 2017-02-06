angular.module('favoriteGiphy')
       .service('favCount', GetCountAmount);

// gets count of favorite gifs from DB
function GetCountAmount($http) {
  var counter = {
    count: 0,
  };

  this.propertyThing = counter;

  this.getCount = function () {
    return $http.get('/count')
                .then(function (response) {
                  var amount = response.data[0];
                  console.log('amount', amount);
                  counter.count = amount.count;
                  return amount;
                });
  };
};
