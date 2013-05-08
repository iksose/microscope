//add url besides link
Template.postItem.domain = function() {
	var a = document.createElement('a');
	a.href = this.url;
	return a.hostname;
		//a = full URL, hostname property abridges it
};