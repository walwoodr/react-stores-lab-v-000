import Store from './Store'

class CounterStore extends Store {
  increment() {
    var newState = this.state + 1;
    this.setState(newState);
  }

  decrement() {
    var newState = this.state - 1;
    this.setState(newState);
  }
  // Your implementation here.
  // Hint: extend the Store class!
}

const counterStore = new CounterStore(0);

export default counterStore;
