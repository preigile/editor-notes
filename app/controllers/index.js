import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		doneAdding: function() {
			var note = this.store.createRecord('note', {
				id: new Date().getTime(),
				title: this.get('title'),
				date: new Date()
			});
			note.save();
			console.log('The note "' + this.get('title') + '" was created');
			this.set('title', '');
		}
	}
});