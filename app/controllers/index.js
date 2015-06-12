import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		doneAddingUserName: function() {
			var userName = this.get('name');
			var userId = md5(userName.toLowerCase());
			var _this = this;

			var onSuccess = function () {
				_this.transitionToRoute('user', userId);
			};

			var onError = function () {
				var newUser = _this.store.createRecord('user', {
					id: userId,
					name: userName
				});
				newUser.save();
				console.log('The user "' + newUser.id + '" was created');
				_this.transitionToRoute('user', newUser.id);
			};

			this.store.find('user', userId).then(onSuccess, onError);
			// localStorage.userId = this.get('model', userId);
			this.set('name', '');
		}
	}
});