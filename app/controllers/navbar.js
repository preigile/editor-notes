import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		logout: function() {
			var _this = this;
			var cookie = this.get('cookie');

			cookie.setCookie('user', '').then(function() {
				_this.transitionToRoute('login');
			});
		}
	}
});
