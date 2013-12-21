var methods = {
  view: function () {
    var userId = Meteor.userId(),
        behavior = this.constructor.schema.behaviors.viewable,
        options = behavior.options;

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
    views: 'The "views" attribute is required',
    viewersIds: 'The "viewersIds" attribute is required'
  },

  methods: methods
});