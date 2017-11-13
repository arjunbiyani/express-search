var React = require('react');
var DefaultLayout = require('./layouts/default');
class LoginPage extends React.Component {
    render() {
        return(
            <DefaultLayout title={this.props.title}>
              <div>Hello {this.props.name}</div>
            </DefaultLayout>
        );
    }
}

module.exports = LoginPage;
