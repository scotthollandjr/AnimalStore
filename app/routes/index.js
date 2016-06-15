import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      animals: this.store.findAll('animal'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    addUser(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    }
  }
});
