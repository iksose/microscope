Template.postSubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    
    // var post = {
    //   url: $(event.target).find('[name=url]').val(),
    //   title: $(event.target).find('[name=title]').val(),
    //   message: $(event.target).find('[name=message]').val()
    // }

            var post = {
        url: $("#url").val(), 
        title: $("#title").val(),
        message: $("#message").val()
    }
    
    
    Meteor.call('post', post, function(error, id) {
      if (error)
        return alert(error.reason);
      else
        
      Meteor.Router.to('postPage', id);
    });
  }
});



    //     var post = {
    //     url: $("#url").val(), 
    //     title: $("#title").val(),
    //     message: $("#message").val()
    // }