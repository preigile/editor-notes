import Ember from 'ember';

export default Ember.Controller.extend({
	isEditing: false,
	actions: {
		edit: function() {
			this.set('isEditing', true);
		},
		doneEditing: function() {
			this.set('isEditing', false);
			this.store.push('note', {
				id: this.get('model.id'),
				title: this.get('model.title')
			}).save();
			console.log('The Note "' + this.get('model.title') + '" was edited');
		},
		removeNote: function() {
			var note = this.get('model');
			note.destroyRecord();
			console.log('The Note "' + this.get('model.title') + '" was removed');
		}
	}
});