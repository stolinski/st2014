var app = app || {};

var PageList = Backbone.Collection.extend({
  model: app.Page,

});

var a = new app.Page({id:1, body:'<p>I make websites</p>', title: 'Scott Tolinski', slug: 'home'}),
    b = new app.Page({id:2, body:'<p>Hi, I&#39;m Scott Tolinski.</p><p>I&#39;m a web applications developer for The University of Michigan and formerly the Senior Developer at <a href="http://qltd.com">Q LTD</a>&nbsp;in Ann Arbor, MI. I also do freelance web design and development for projects that I find interesting, challenging or exciting, and give private training or consulting in various web topics. &nbsp;In 2012, I created <a href="http://www.youtube.com/user/LevelUpTuts/featured">Level Up Tuts</a>&nbsp;with web developer <a href="http://www.snowfoxdesign.com/">Ben Schaaf</a>. With Level Up Tuts we have taken our knowledge of web technologies to YouTube to provide free training to developers looking to learn something new. I&#39;ve also created premium tutorial packages that can be purchased at the <a href="http://marketplace.tutsplus.com/user/torocski">Tuts+ Marketplace</a>.</p><p>I also enjoy <a href="http://youtu.be/Zcoj4Zfj6_k?t=1m34s">bboying</a> also known as breakdancing, and have been dancing for over 8 years doing shows for professional NFL and NBA teams. I&#39;m inspired by a hot cup of green tea, excellent music, and Shaw Bros. kung fu movies.</p><p>Please contact me if you would like to work on a project together, or just want to chat.</p>', title: 'About', slug: 'about'}),
    d = new app.Page({id:4, body:"<p>Feel free to contact me through the form below, I'd love to chat.</p>", title: 'Contact', slug: 'contact'}),
    c = new app.Page({id:3, body:"<p>I've worked on many types of projects both personal and professional. Here is a sample of my technique.</p>", title: 'Projects', slug: 'projects'});

app.Pages = new PageList([a,b,c,d]);