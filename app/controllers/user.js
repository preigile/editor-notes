import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		doneAddingNote: function() {
			var _this = this;
			var newNote = this.store.createRecord('note', {
				title: this.get('title'),
				date: new Date()
			});
			
			newNote.save().then(function(newNote) {
				var user = _this.get('model');
				_this.get('model.notes').addObject(newNote);
				user.save();
			}, function() {
				newNote.rollback();
			});

			this.set('title', '');
		}
	},

	sortProperties: ['date:desc'],
	sortedNotes: Ember.computed.sort('model.notes', 'sortProperties'),

	latestNotes: function() {
		var sortedNotes = this.get('sortedNotes');
		return sortedNotes.slice(0, 3);
	}.property('sortedNotes.[]')
});
