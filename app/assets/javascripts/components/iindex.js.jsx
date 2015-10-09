/* global React */
window.Index = React.createClass({
  render: function() {

    return (<div>
      <div><PokemonsIndex /></div>
      <div>{this.props.children}</div>
      </div>
    );
  }
});
