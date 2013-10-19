if (Handlebars) {
  Handlebars.registerHelper('viewed', function (viewersIds) {
    var userId;
  
    userId = Meteor.userId();
  
    return viewersIds.indexOf(userId) >= 0 ? 'viewed' : '';
  });
}