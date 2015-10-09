/* global EventEmitter */
(function() {
  'use strict';

  var _pokemons = [];
  var POKEMONS_INDEX_CHANGE_EVENT = "POKEMONS_INDEX_CHANGE_EVENT";
  var POKEMON_DETAIL_CHANGE_EVENT = "POKEMON_DETAIL_CHANGE_EVENT";

  var resetPokemons = function(newpokes) {
    _pokemons = newpokes;
    PokeStore.indexChanged();
  };

  var receiveSinglePokemon = function(pokemon) {
    var idx = _pokemons.indexOf(PokeStore.find(pokemon.id));
    _pokemons[idx] = pokemon;
    PokeStore.detailChanged();
  };

  var PokeStore = window.PokeStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _pokemons.slice();
    },

    addPokemonsIndexChangeListener: function (callback) {
      this.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    removePokemonsIndexChangeListener: function (callback) {
      this.removeListener(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    indexChanged: function () {
      this.emit(POKEMONS_INDEX_CHANGE_EVENT);
    },

    addPokemonDetailChangeListener: function (callback) {
      this.on(POKEMON_DETAIL_CHANGE_EVENT, callback);
    },

    removePokemonDetailChangeListener: function (callback) {
      this.removeListener(POKEMON_DETAIL_CHANGE_EVENT, callback);
    },

    detailChanged: function () {
      this.emit(POKEMON_DETAIL_CHANGE_EVENT);
    },

    find: function(pokemonId) {
      var foundPoke;
      _pokemons.forEach(function(pokemon){
        if (pokemon.id === parseInt(pokemonId)) {foundPoke = pokemon;}
      });
      return foundPoke;
    }

  });

  window.PokeStore.dispatcherID = AppDispatcher.register(function(action) {
    switch(action.actionType) {
      case PokemonConstants.POKEMONS_RECEIVED:
        resetPokemons(action.pokemons);
        break;
      case PokemonConstants.POKEMON_RECEIVED:
        receiveSinglePokemon(action.pokemon);
        break;
    }
  });
}());
