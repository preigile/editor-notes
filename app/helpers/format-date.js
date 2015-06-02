import Ember from 'ember';

var formatDate = Ember.Handlebars.makeBoundHelper(function(date){ 
	var timeInterval = moment() - moment(date);
	var halfDay = 43200000;

	if (timeInterval < halfDay) {
		return moment(date).fromNow();
	}
	else {
		return moment(date).calendar();
	}
});

export default formatDate;  