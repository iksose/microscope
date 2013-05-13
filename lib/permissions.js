// check that the userID specified owns the document

ownsDocument = function(userId, doc) {
	return doc && doc.userId === userId;
}