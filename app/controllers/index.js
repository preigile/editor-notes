import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		doneAddingNote: function() {
			var _this = this;
			var noteTitle = this.get('title');
			var emptyString = Ember.isBlank(noteTitle);
			
			var newNote = this.store.createRecord('note', {
				title: this.get('title'),
				date: new Date()
			});

			if (!emptyString && noteTitle.length < 513) {
				newNote.save().then(function(newNote) {
					var user = _this.get('model');
					_this.get('model.notes').addObject(newNote);
					user.save();
				}, function() {
					newNote.rollback();
				});
			}

			this.set('title', '');
		},

		logout: function() {
			var _this = this;
			var cookie = this.get('cookie');

			cookie.setCookie('user', '').then(function() {
				_this.transitionToRoute('login');
			});
		}
	},

	sortProperties: ['date:desc'],
	sortedNotes: Ember.computed.sort('model.notes', 'sortProperties'),

	latestNotes: function() {
		var sortedNotes = this.get('sortedNotes');
		return sortedNotes.slice(0, 3);
	}.property('sortedNotes.[]')
});