import Ember from 'ember';

export default Ember.ArrayController.extend({
	noteMessage: function() {
		var notesCount = this.get('model.length');
		if (notesCount === 1) {
			return 'You have ' + notesCount + ' note';
		} else { 
			return 'You have ' + notesCount + ' notes';
		}
	}.property('model.length'),

	sortProperties: ['date'],		
	sortAscending: false
});
