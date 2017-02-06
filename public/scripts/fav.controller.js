angular.module('favoriteGiphy')
       .controller('FavController', FavController);

// favorites page controller
function FavController($http, favCount) {
  var fav = this;
  fav.favorites = [];

  console.log('FavController Loaded');

  // gets current list of favorite gifs from DB
  fav.favoritesGet = function () {
    $http.get('/fav')
         .then(printFavorites, errorCallback);
  };

  function printFavorites(response) {
    fav.favorites = response.data;
    console.log(fav.favorites);
    console.log(fav.favorites[0].url);
  };

  // updates comment in DB
  fav.makeNewComment = function (comment, id) {
    console.log(comment);
    $http.put('/fav/' + id, { comment: comment })
         .then(function (response) {
            fav.favoritesGet();
          });
  };

  // deletes favorited gif in DB
  fav.deleteFavorite = function (id) {
    console.log('id', id);

    $http.delete('/fav/' + id)
         .then(function (response) {
            fav.favorites = [];
            fav.favoritesGet();
            favCount.getCount();
          });
  };

  // get gifs from DB on initial page load
  fav.favoritesGet();
};

function errorCallback(error) {
  console.log('Error making http request', error);
};
