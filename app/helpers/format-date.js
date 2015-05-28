import Ember from 'ember';

var formatDate = Ember.Handlebars.makeBoundHelper(function(date){ 
	var oneDay = moment() - moment(date);
	if (oneDay < 43200000) {
		return moment(date).fromNow();
	}
	else {
		return moment(date).calendar();
	}
});

export default formatDate;  