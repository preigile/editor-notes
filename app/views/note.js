import Ember from 'ember';

export default Ember.View.extend({
	isExpanded: false,
    
    classNameBindings: ['isExpanded', 'readMore' ],
    
    readMore: function() {
        return this.get('length') > 255;
    }.property('length')
});
