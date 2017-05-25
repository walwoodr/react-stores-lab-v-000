import counterStore from '../stores/counterStore';

// Your implementation here.
// Hint: We need two actions!
function increment(){
  counterStore.increment();
}

function decrement(){
  counterStore.decrement();
}

export default {increment, decrement}
