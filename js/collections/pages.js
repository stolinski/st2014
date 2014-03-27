var app = app || {};

var PageList = Backbone.Collection.extend({
  model: app.Page,

});

var a = new app.Page({id:1, body:'yoyo', title: 'Home', slug: 'home'}),
    b = new app.Page({id:2, body:'sup', title: 'About', slug: 'about'}),
    d = new app.Page({id:4, body:'sders ser sers ers er', title: 'Contact', slug: 'contact'}),
    c = new app.Page({id:3, body:'yoyo', title: 'Projects', slug: 'projects'});

app.Pages = new PageList([a,b,c,d]);