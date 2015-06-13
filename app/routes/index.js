import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var cookie = this.get('cookie');
		var token = cookie.getCookie('user');

		if (!token) { 
			this.transitionTo('login'); 
		}

		return this.store.find('user', token);
	}
});
