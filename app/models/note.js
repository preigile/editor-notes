import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
	title: attr('string'),
	date: attr('date'),
	user: DS.belongsTo('user')
});
