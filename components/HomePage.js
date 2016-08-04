var React = require('react');

var HomePage = React.createClass({
  getInitialState: function() {
    return {apiKey: '', email: ''};
  },

  login: function(e) {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.apiKey);
  },

  onEmailChange: function(e) {
    this.setState({email: e.target.value});
  },

  onAPIKeyChange: function(e) {
    this.setState({apiKey: e.target.value});
  },

  render: function() {
    return <div>
    <p>Welcome to Tulip!</p>
    <form onSubmit={this.login}>
    <label htmlFor="email">Email address</label>
    <input id="email"
      name="email"
      placeholder="Your zulip account's email address"
      onChange={this.onEmailChange}
      value={this.state.email}>
    </input>
    <label htmlFor="API-key">API Key</label>
    <input id="API-key" 
      name="API-key" 
      placeholder="Paste your API key here!" 
      onChange={this.onAPIKeyChange} 
      value={this.state.apiKey}>
    </input>
    <button>Sign In!</button>
    </form>
    <h2>Where do I find my API key????</h2>
    <p>Sign in on zulip.com, and head to your settings page. In the section on "your bots" click view API key :) Copy it, and paste it here!</p>
    </div>;
  }
});

module.exports = HomePage;
