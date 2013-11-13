var methods = {
  view: function () {
    var userId = Meteor.userId(),
        options = this._definition.behaviors.viewable.getOptions();
    if (this.viewersIds.indexOf(userId) < 0) {
      this.views++;
      this.viewersIds.push(userId);
      return 1;
    }
    return 0;
  }
};

Behavior('viewable', {
  options: {
    oneViewPerUser: false
  },

  fields:{
    views: 0,
    viewersIds: [],
  },

  required: {
    views: 'The `views` attribute is required',
    viewersIds: 'The `viewersIds` attribute is required'
  },

  methods: methods
});