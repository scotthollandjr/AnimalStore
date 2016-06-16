import Ember from 'ember';

export default Ember.Component.extend({
  calculateTotal: Ember.computed('model.animals.[]', function() {
    var total = 0.00;
    var animals = this.get('model.animals');
    animals.forEach(function(animal) {
      if (animal.get('cart')) {
        console.log("animal is:" + animal);
        console.log("animal cost is:" + animal.get('cost'));
        total += parseInt(animal.get('cost'));
      }
    });
    return total;
  }),

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
