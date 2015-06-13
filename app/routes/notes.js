import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var cookie = this.get('cookie');
		var token = cookie.getCookie('user');
		
		return this.store.find('user', token);
	}
});
