import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('index', { path: '/' });
	this.resource('notes', function () {
		this.resource('note', { path: '/:id' });
	});
	this.route('catchall', {path: '/*wildcard'});
});

export default Router;
