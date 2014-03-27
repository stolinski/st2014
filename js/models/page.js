var app = app || {};

app.Page = Backbone.Model.extend({

  defaults: {
    id:'',
    title: '',
    slug: '',
    body:''
  },

});