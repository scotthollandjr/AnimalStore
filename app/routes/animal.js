import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('animal', params.animal_id);
  },

  actions: {
    updateAnimal(params, animal) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          animal.set(key, params[key]);
        }
      });
      animal.save();
      this.transitionTo('user', params.user);
    },

    deleteAnimal(animal) {
      animal.destroyRecord();
      this.transitionTo('index');
    }
  }
});
