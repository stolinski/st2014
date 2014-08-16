var app = app || {};

var ProjectsList = Backbone.Collection.extend({
  model: app.Project,

});

var 
	mat = new app.Project({ title: 'Material Colors', url: 'http://materialcolors.com/', meta: '<p>Built &amp; Designed for: Fun<br />Built With: Angular.js, Polymer, Sass</p>'});
	con = new app.Project({ title: 'Concrete.org', url: 'http://www.concrete.org/', meta: '<p>Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built Templates With: HTML5, CSS3, JavaScript</p>'});
	sig = new app.Project({ title: 'ACM SIGGRAPH', url: 'http://www.siggraph.org/', meta: '<p>Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Drupal 7, Omega 3, Sass/Compass</p>'});
    q = new app.Project({ title: 'Q LTD', url: 'http://qltd.com/', meta: '<p>Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Node.js, Express, MongoDB, Sass/Compass/Susy</p>' });
    check = new app.Project({ title: 'Dev Checklist', url: 'http://checklist.umichcreative.org/', meta: '<p>Built &amp; Designed for: <a target="_blank" href="http://creative.umich.edu/">Michigan Creative</a><br />Built With: Angular.js, Sass/Compass</p>' });
    fac = new app.Project({ title: 'Operations Leadership Factory', url: 'http://factory.umichcreative.org/', meta: '<p>Built for: <a target="_blank" href="http://creative.umich.edu/">Michigan Creative</a><br />Built With: Drupal 7, Omega 4, Sass/Compass/SingularityGS</p>'  });
    lut = new app.Project({ title: 'Level Up Tuts', url: 'http://leveluptuts.com/', meta: '<p>450+ Web Dev Tutorials on: <a target="_blank" href="https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg">Youtube</a><br />Built With: Drupal 7, Omega 4, Sass/Compass/SingularityGS</p>' });

app.Projects = new ProjectsList([lut,mat,q,sig,fac,check,con]);