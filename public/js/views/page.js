var app = app || {};

app.PageView = Backbone.View.extend({
  tagName: "div",
  id: "home-view",
  el: '#appbody',
  template: _.template( $( '#page-template' ).html() ),


  initialize: function() {
  },

  render: function(slug) {
    if (slug == 'home') {
      $('.main-vid').trigger('play');
    }
    if (slug == 'about') {
      this.template = _.template( $( '#about-template' ).html() );
    }

    var goal = _.findWhere(app.Pages.toJSON(), {slug: slug});
    this.$el.html(this.template(goal));

    if (slug != 'home') {
      $('.main-vid').trigger('pause');
    }
  },

  body: function (slug) {
    $('body').removeClass().addClass(slug);
  },

  change: function(slug) {
    this.render(slug);
  },

  about: function() {
    this.render('about');
  },
});