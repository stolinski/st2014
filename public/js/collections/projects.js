var app = app || {};

var ProjectsList = Backbone.Collection.extend({
  model: app.Project,

});

var a = new app.Project({ title: 'Yo', url: 'https://www.youtube.com/watch?v=2KvHr2uGuMM#t=19', meta: '<p>Built by SkoT</p>'});
    b = new app.Project({});
    d = new app.Project({});
    c = new app.Project({});

app.Pages = new PageList([a,b,c,d]);