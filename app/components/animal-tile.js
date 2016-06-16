import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addToCart(animal) {
      this.sendAction('addToCart', animal)
    }
  }
});
