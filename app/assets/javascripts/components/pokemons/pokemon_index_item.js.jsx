/* global ReactRouter, React */

window.PokemonIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  showDetail: function(e) {
    this.history.pushState(null, 'pokemons/' + this.props.pokemon.id);
  },

  render: function() {
    // debugger
    return(
      <li onClick={this.showDetail} className="poke-list-item">{this.props.pokemon.name}, {this.props.pokemon.poke_type}</li>
    )
  }
});
