/* global EventEmitter */
(function() {
  'use strict';

  var _pokemons = [];

  var resetPokemons = function(newpokes) {
    _pokemons = newpokes;
  };

  var PokeStore = window.PokeStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _pokemons.slice();
    },

  });

  window.PokeStore.dispatcherID = AppDispatcher.register(function(action) {
    switch(action.actionType) {
      case PokemonConstants.POKEMONS_RECEIVED:
        resetPokemons(action.pokemons);
        break;
    }
  });
}());
