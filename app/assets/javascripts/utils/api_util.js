(function(root) {
  'use strict';

  var ApiUtil = root.ApiUtil = {
    fetchAllPokemons: function() {
      $.get('/api/pokemon/', function(response){
      ApiActions.receiveAllPokemons(response);
      });
    },

    fetchPokemon: function(id) {
      $.get('/api/pokemon/' + id, function(response){
        ApiActions.receiveSinglePokemon(response);
      });
    }
  };

}(this));
