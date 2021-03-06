import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	notes: DS.hasMany('note', {async: true})
});
