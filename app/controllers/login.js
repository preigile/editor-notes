import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		doneAddingUserName: function() {
			var userName = this.get('name');
			var userId = md5(userName.toLowerCase());
			var emptyString = Ember.isBlank(userName);
			var _this = this;
			var cookie = this.get('cookie');

			var onSuccess = function () {
				cookie.setCookie('user', userId).then(function() {
					_this.transitionToRoute('index');
				});
			};

			var onError = function () {
				var newUser = _this.store.createRecord('user', {
					id: userId,
					name: userName
				});
				newUser.save();
				console.log('The user "' + newUser.name + '" was created');
				cookie.setCookie('user', newUser.id).then(function() {
					_this.transitionToRoute('index');
				});
			};

			if (!emptyString && userName.length < 33) {
				this.store.find('user', userId).then(onSuccess, onError);
				this.set('name', '');
			}
		}
	}
});
