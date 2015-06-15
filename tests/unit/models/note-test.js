import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('note', 'Unit | Model | note', {
	needs: ['model:user']
});

test('it should be a note', function(assert) {
	var store = this.store();
	var note = this.subject({ title: 'Note', date: new Date(2015, 2, 1, 6, 5, 0) });
	
	assert.equal(note.get('title'), 'Note');
	assert.equal(note.get('date'), 'Sun Mar 01 2015 06:05:00 GMT+0300 (MSK)');
	assert.ok(note instanceof DS.Model);
});

test('user relationship', function(assert) {
	var Note = this.store().modelFor('note');
	var relationship = Ember.get(Note, 'relationshipsByName').get('user');

	assert.equal(relationship.key, 'user');
	assert.equal(relationship.kind, 'belongsTo');
});
