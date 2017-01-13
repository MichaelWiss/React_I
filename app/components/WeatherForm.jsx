var React = require('react');

var WeatherForm = React.Form = React.createClass({
	onFormSubmit: function () {

	},
	render: function () {
		return (
			<div>
			  <form onSubmit={this.onFormSubmit}>
                <input type="text"/>
                <button>Get Weather</button>
              </form>
			</div>
		);
	}
});

module.exports = WeatherForm;