var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');


var ErrorModal = React.createClass({
	getDefaultProps: function () {
		return{
			title: 'Error'
		};
	},
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	componentDidMount: function () {
		var {title, message} = this.props;
		var modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
			<h4>{title}</h4>
			<p> {message}</p>
			<p>
			  <button className="button hollow" data-close="">
			  Okay
              </button>
             </p>
			</div>
			);
		var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
	},
	render: function () {
		

		return (
			<div>
            </div>
			);

		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
			<h4>{title}</h4>
			<p> {message}</p>
			<p>
			  <button className="button hollow" data-close="">
			  Okay
              </button>
             </p>
			</div>
			);
	}

});

module.exports = ErrorModal;


// var React = require('react');
// var ReactDOM = require('react-dom');
// var ReactDOMServer = require('react-dom/server');

// var ErrorModal = React.createClass({
//   getDefaultProps: function () {
//     return {
//       title: 'Error'
//     };
//   },
//   propTypes: {
//       title: React.PropTypes.string,
//       message: React.PropTypes.string.isRequired
//   },
//   componentDidMount: function () {
//     var {title, message} = this.props;
//     var modal = (
//       <div id="error-modal" className="reveal tiny text-center" data-reveal="">
//         <h4>{title}</h4>
//         <p>{message}</p>
//         <p>
//           <button className="button hollow" data-close="">
//             Okay
//           </button>
//         </p>
//       </div>
//     );
//     var $modal = $(ReactDOMServer.renderToString(modal));
//     var $el = $(ReactDOM.findDOMNode(this));

//     $el.html($modal);

//     this.modal = new Foundation.Reveal($('#error-modal'));
//     this.modal.open();
//   },
//   render: function () {
//     return (
//       <div></div>
//     );
//   }
// });

// module.exports = ErrorModal;