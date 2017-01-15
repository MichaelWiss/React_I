var React = require('react');

// var About = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>About Component</h3>
//         );
// 	}
// });

var About = (props) => {
	return (
	  <div>
		<h1 className="text-center page-title">About</h1>
		 <p>Welcome to About page</p>
		 <p>
		   Made with React
		 </p>
		 <ul>
		   <li>
		   <a href="https://facebook.github.io">React</a>
		   </li>
		 </ul>
     </div>
	)
};

module.exports = About;