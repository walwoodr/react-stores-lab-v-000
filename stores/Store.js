class Store {
  constructor(initialState){
    this.state = initialState;
    this.listeners = [];
  }

  addListener(listener){
    this.listeners.push(listener);
    var thisListener = listener;
    const removeListener = () => {
      this.listeners = this.listeners.filter((thisListener)=> listener !== thisListener);
    };
    return removeListener;
  }

  setState(state) {
    this.state = state;
    for (const listener of this.listeners){
      listener(state);
    };
  }

  getState(){
    return this.state
  }

  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.
}

export default Store;
