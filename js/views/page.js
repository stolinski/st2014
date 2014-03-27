var app = app || {};

app.PageView = Backbone.View.extend({
  tagName: "div",
  id: "home-view",
  el: '#appbody',
  template: _.template( $( '#page-template' ).html() ),


  initialize: function() {
  },

  render: function(slug) {
    if (!slug) { slug = 'home'; }

    var goal = _.findWhere(app.Pages.toJSON(), {slug: slug});

    this.$el.html(this.template(goal));
  },

  body: function (slug) {
    $('body').removeClass().addClass(slug);
  },

  change: function(slug) {
    // $("#appbody").html(this.el);
    this.render(slug);
  }
});