import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addUser() {
      var params = {
        name: this.get('name'),
        picture: this.get('picture'),
        password: this.get('password')
      };
      if(params.name != undefined && params.picture != undefined && params.password != undefined){
        this.sendAction('addUser', params);
      } else{
        alert("You gotta fill all the inputs dude");
      };
      this.set("name", "");
      this.set("picture", "");
      this.set("password", "");
    }
  }
});
