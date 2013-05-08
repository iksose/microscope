Template.postPage.currentPost = function(){
	return Posts.findOne(Session.get('currentPostId'));
};