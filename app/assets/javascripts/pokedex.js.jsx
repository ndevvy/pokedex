/* global React, ReactRouter */

$(function() {

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;



  React.render((
    <Router>
      <Route path="/" component={Index}>
        <Route path="pokemons/:pokemonId" component={window.PokemonDetail}></Route>
      </Route>
    </Router>
  ), document.getElementById('pokedex'));
});
