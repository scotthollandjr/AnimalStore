import Ember from 'ember';

export default Ember.Component.extend({
  updateAnimalForm: false,
  actions: {
    updateAnimalFormShow(){
      this.set('updateAnimalForm', true);
    },

    updateAnimal(animal) {
      var params = {
        name: this.get('name'),
        cost: this.get('cost'),
        picture: this.get('picture'),
        description: this.get('description'),
        user: this.get('user'),
        cart: false,
      };
      this.set('updateAnimalForm', false)
      this.sendAction('updateAnimal', params, animal);
      this.set('name', "");
      this.set('cost', "");
      this.set('description', "");
      this.set('picture', "");
    },

    deleteAnimal(animal) {
      this.sendAction('deleteAnimal', animal);
    }
  }
});
