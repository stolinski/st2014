var app = app || {};

app.PageView = Backbone.View.extend({
  tagName: "div",
  id: "home-view",
  el: '#appbody',
  template: _.template( $( '#page-template' ).html() ),


  initialize: function() {
  },

  render: function(slug) {
    if (!slug) { 
      slug = 'home';
      $('.main-vid').trigger('play');
    }
    if (slug == 'about') {
      this.template = _.template( $( '#about-template' ).html() );
    }

    var goal = _.findWhere(app.Pages.toJSON(), {slug: slug});
    this.$el.html(this.template(goal));

    if (slug == 'contact') {
      this.loadForm();
    }
    if (slug != 'home') {
      $('.main-vid').trigger('pause');
    }
  },

  body: function (slug) {
    if (!slug) { slug = 'home'; }
    $('body').removeClass().addClass(slug);
  },

  change: function(slug) {
    this.render(slug);
  },
  loadForm: function() {
    var contact = new app.Contact();
    var form = new Backbone.Form({
      model: contact
    }).render();
    this.$el.append(form.el).append("<input class='btn' type='submit' value='submit' name='submit' />");

  }
});