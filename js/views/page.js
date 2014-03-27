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

    this.render(slug);
  },

  transitionOut: function (callback) {
    console.log('tranout');
    var view = this;

    view.$el.removeClass('is-visible');
    view.$el.on('transitionend', function () {
      if (_.isFunction(callback)) {
        callback();
      }
    });

  },

});