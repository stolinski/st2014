var app = app || {};

app.Project = Backbone.Model.extend({

  defaults: {
    title: '',
    url: '',
    image: '',
    body:''
  },

});