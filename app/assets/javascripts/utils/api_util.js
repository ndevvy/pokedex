(function(root) {
  'use strict';

  var ApiUtil = root.ApiUtil = {
    fetchAllPokemons: function() {
      $.get('/api/pokemon/', function(response){
      ApiActions.receiveAllPokemons(response);
      });
    }
  };

}(this));
