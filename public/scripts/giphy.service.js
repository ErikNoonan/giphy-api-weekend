angular.module('favoriteGiphy')
       .service('giphy', GiphyAPIService);

// gets gifs from giphy
function GiphyAPIService($http) {
  var API = 'http://api.giphy.com/v1/gifs/';
  var KEY = 'dc6zaTOxFJmzC';

  this.searchItem = function (query) {
    return $http.get(API + 'search', {
      params: {
        api_key: KEY,
        q: query,
        rating: 'g'
      },
    }).then(function (response) {
        return response.data.data;
      });
  };

  this.randomSearch = function () {
    return $http.get(API + 'random', {
      params: {
        api_key: KEY,
        rating: 'g'
      },
    })
                .then(function (response) {
                  console.log(response.data.data);
                  return response.data.data;
                });
  };
};
