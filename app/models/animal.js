import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    name: attr(),
    cost: attr(),
    picture: attr(),
    description: attr(),
    user: belongsTo('user', {async: true}),
    comment: hasMany('comment', {async: true}),
});
