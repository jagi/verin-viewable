if (Handlebars) {
  Handlebars.registerHelper('viewed', function (viewersIds) {
    var userId;
  
    userId = Meteor.userId();
  
    if (viewersIds.indexOf(userId) >= 0) {
      return ' viewed';
    }
    return '';
  });
}