import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('user', { path: '/user/:id' });
  this.route('notes', { path: '/user/:id/notes' });
  this.route('catchall', { path: '/*wildcard' });
});

export default Router;
