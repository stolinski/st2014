var app = app || {};

var ProjectsList = Backbone.Collection.extend({
  model: app.Project,

});

var a = new app.Project({ title: '', url: '', image: '', body:''});
    b = new app.Project({});
    d = new app.Project({});
    c = new app.Project({});

app.Pages = new PageList([a,b,c,d]);