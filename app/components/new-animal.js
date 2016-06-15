import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnimal() {
      var params = {
        name: this.get('name'),
        cost: this.get('cost'),
        picture: this.get('picture'),
        description: this.get('description'),
        user: this.get('user'),
      };
      this.sendAction('addAnimal', params);
      this.set('name', "");
      this.set('cost', "");
      this.set('description', "");
      this.set('picture', "");
    }
  }
});
