/* global React */

window.PokemonDetail = React.createClass({
  getInitialState: function() {
    // debugger
    return this.getStateFromStore();
  },

  componentDidMount: function() {
    PokeStore.addPokemonDetailChangeListener(this._handleChange);
    ApiUtil.fetchPokemon(this.props.params.pokemonId);
  },

  componentWillUnmount: function() {
    PokeStore.removePokemonDetailChangeListener(this._handleChange);
  },

  getStateFromStore: function() {
    var foundPoke = PokeStore.find(this.props.params.pokemonId);
    // debugger;
    return {pokemon: foundPoke};
  },

  _handleChange: function() {
    // debugger
    this.setState(this.getStateFromStore());
  },

  componentWillReceiveProps: function(newProps) {
    debugger
    ApiUtil.fetchPokemon(parseInt(newProps.params.pokemonId));
  },

  render: function() {

    var pokemon = this.state.pokemon;
    // debugger
    if (pokemon === undefined) {
      return(
        <div>

        </div>
      );
    } else {
      return(
        <div>
          <div className='detail'>
            <img src={pokemon.image_url}></img><br></br>
            <ul>
              {
              Object.keys(pokemon).map(function(property) {
                return (<li>{property.toUpperCase() + ": " + pokemon[property]}</li>);
              })
            }
            </ul>
          </div>
        </div>
      );
    }
  }
});
