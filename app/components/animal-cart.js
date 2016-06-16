import Ember from 'ember';

export default Ember.Component.extend({
  model: function() {
    return this.store.query('animal', {
      orderBy: 'cart',
      equalTo: 'true'
    });
  },

  actions: {
    removeFromCart(animal) {
      this.sendAction('removeFromCart', animal)
    }
  }
});
