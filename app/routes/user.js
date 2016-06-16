import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('user', params.user_id);
  },

  actions: {
    addAnimal(params) {
      var newAnimal = this.store.createRecord('animal', params);
      var user = params.user;
      user.get('animal').addObject(newAnimal);
      newAnimal.save().then(function(){
        return user.save();
      });
      this.transitionTo('user', params.user);
    }
  }
});
