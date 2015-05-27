import Ember from 'ember';

export default Ember.ArrayController.extend({
	notesCount: Ember.computed.alias('length')
});
