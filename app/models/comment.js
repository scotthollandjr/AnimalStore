import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  comment: attr(),
  user: belongsTo('user', {async: true}),
  animal: belongsTo('animal', {async: true}),
});
