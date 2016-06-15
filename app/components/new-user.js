import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addUser() {
      var params = {
        name: this.get('name'),
        picture: this.get('picture'),
        password: this.get('password')
      };
      this.sendAction('addUser', params);
    }
  }
});
