var app = app || {};

var Workspace = Backbone.Router.extend({
    /* define the route and function maps for this router */
    routes: {
        ":slug" : "defaultRoute",
        /* Sample usage: http://example.com/#about */
        '*path':  'defaultRoute'
    },

    showAbout: function(slug){
    },

    defaultRoute: function(path) {
      this.view = new app.PageView();
      this.view.body(path);
      this.view.change(path);
    }

});



/* Now that we have a router setup, we need to instantiate it */
app.PageRouter = new Workspace();
Backbone.history.start();