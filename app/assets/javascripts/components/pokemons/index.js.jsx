/* global React, PokeStore, ApiUtil */
var PokemonsIndex = React.createClass( {
  getInitialState: function() {

    return {pokemons: PokeStore.all()};
  },

  _onChange: function() {
    this.setState({pokemons: PokeStore.all()});
  },

  componentDidMount: function() {
    PokeStore.addPokemonsIndexChangeListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function() {
    PokeStore.removePokemonsIndexChangeListener(this._onChange);
  },

  render: function() {
    return(
      <div className="pokemon-index">
        <ul>
          {this.state.pokemons.map(function(pokemon) {
            return(
              <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />
            );
          }.bind(this))}
        </ul>
      </div>
    );
  }
});
