import Ember from 'ember';

export default Ember.Controller.extend({
	
	noteMessage: function() {
		var userId = this.get('model.id');
		var notesCount = this.get('model.notes.length');

		if (notesCount === 1) { return 'You have ' + notesCount + ' note'; }
		if (notesCount > 1) { return 'You have ' + notesCount + ' notes'; }

		this.transitionToRoute('user', userId);
	}.property('model.notes.length'),

	sortProperties: ['date:desc'],
	sortedNotes: Ember.computed.sort('model.notes', 'sortProperties'),

	actions: {
		removeNote: function(note) {
			note.destroyRecord();
		}
	}
});
