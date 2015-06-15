import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
	needs: ['model:note']
});

test('user is a valid ember-data Model', function (assert) {
	var store = this.store();
	var user = this.subject({ name: 'User' });
	assert.ok(user);
	assert.ok(user instanceof DS.Model);

	Ember.run(function() {
		user.set('note', store.createRecord('note', {}));
	});

	assert.ok(user.get('note'));
	assert.ok(user.get('note') instanceof DS.Model);
});

test('notes relationship', function(assert) {
	var User = this.store().modelFor('user');
	var relationship = Ember.get(User, 'relationshipsByName').get('notes');

	assert.equal(relationship.key, 'notes');
	assert.equal(relationship.kind, 'hasMany');
});
