import React from 'react';
import counterStore from '../stores/counterStore';
import actions from '../actions/index'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(ev){
    ev.preventDefault();
    actions.increment();
  }

  decrement(ev){
    ev.preventDefault();
    actions.decrement();
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => {
      this.setState({counter: state});
    });
    this.setState({counter: counterStore.getState()});
    // Your implementation here.
  }
  componentWillUnmount () {
    this.removeListener();
    // Your implementation here.
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.decrement}>
            -
          </button>
          <button className='increment' onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
