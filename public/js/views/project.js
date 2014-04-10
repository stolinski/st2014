var app = app || {};

app.ProjectView = Backbone.View.extend({

  tagName: 'li',
  template: _.template( $('#project-template').html()),

  initialize: function() {

  },

  render: function() {
    this.$el.html(this.template( this.model.toJSON() ) );
    return this;
  },


});