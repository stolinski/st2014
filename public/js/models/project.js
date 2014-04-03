var app = app || {};

app.Project = Backbone.Model.extend({

  defaults: {
    id:'',
    title: '',
    url: '',
    image: '',
    body:''
  },

});