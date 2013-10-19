Viewable = Behaviour('viewable', function () {
  this.fields({
    views: 0,
    viewersIds: [],
  });

  this.required({
    views: 'The `views` attribute is required',
    viewersIds: 'The `viewersIds` attribute is required'
  });

  this.methods({
    view: function () {
      var userId = Meteor.userId(),
          options = this._definition._behaviours.viewable._options;
      if (this.viewersIds.indexOf(userId) < 0) {
        this.views++;
        this.viewersIds.push(userId);
        return 1;
      }
      return 0;
    }
  });
});