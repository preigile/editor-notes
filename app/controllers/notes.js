import Ember from 'ember';

export default Ember.Controller.extend({
	
	noteMessage: function() {
		var notesCount = this.get('model.notes.length');

		if (notesCount === 1) { return 'You have ' + notesCount + ' note'; }
		if (notesCount > 1) { return 'You have ' + notesCount + ' notes'; }

		this.transitionToRoute('index');
	}.property('model.notes.length'),

	sortProperties: ['date:desc'],
	sortedNotes: Ember.computed.sort('model.notes', 'sortProperties'),

	actions: {
		removeNote: function(note) {
			note.destroyRecord();
		},
		
		logout: function() {
			var _this = this;
			var cookie = this.get('cookie');

			cookie.setCookie('user', '').then(function() {
				_this.transitionToRoute('login');
			});
		}
	}
});
