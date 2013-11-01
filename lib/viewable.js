var methods = {
  view: function () {
    var userId = Meteor.userId(),
        options = this._definition.getBehavior('viewable').getOptions();
    if (this.viewersIds.indexOf(userId) < 0) {
      this.views++;
      this.viewersIds.push(userId);
      return 1;
    }
    return 0;
  }
};

Behavior('viewable', function (options) {
  var defaultOptions = {
    oneViewPerUser: false
  };
  this.setOptions(_.extend(defaultOptions, options));

  this.setFields({
    views: 0,
    viewersIds: [],
  });

  this.setRequired({
    views: 'The `views` attribute is required',
    viewersIds: 'The `viewersIds` attribute is required'
  });

  this.setMethods(methods);
});