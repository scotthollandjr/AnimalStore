import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      animals: this.store.findAll('animal')
    });
  },

  actions: {
    addUser(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    },

    addToCart(animal){
      animal.set("cart", true);
      animal.save();
      this.transitionTo('index');
    },

    removeFromCart(animal){
      animal.set("cart", false);
      animal.save();
      this.transitionTo('index');
    }
  }
});
