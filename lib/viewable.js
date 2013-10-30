var methods = {
  view: function () {
    var userId = Meteor.userId(),
        options = this._definition.getBehavior('viewable').options();
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
  this.options(_.extend(defaultOptions, options));

  this.fields({
    views: 0,
    viewersIds: [],
  });

  this.required({
    views: 'The `views` attribute is required',
    viewersIds: 'The `viewersIds` attribute is required'
  });

  this.methods(methods);
});