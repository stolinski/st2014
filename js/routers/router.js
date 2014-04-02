var app = app || {};

var Workspace = Backbone.Router.extend({
    /* define the route and function maps for this router */
    routes: {
      'about' : 'showAbout',
      ':slug' : 'defaultRoute',
      '*path' : 'defaultRoute'
    },

    showAbout: function(slug){
      this.view = new app.PageView();
      this.view.body('about');
      this.view.about();
    },

    defaultRoute: function(path) {
      if (!path) { path = 'home'; }
      this.view = new app.PageView();
      this.view.body(path);
      this.view.change(path);
    }

});



/* Now that we have a router setup, we need to instantiate it */
app.PageRouter = new Workspace();
Backbone.history.start();