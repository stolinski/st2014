var app = app || {};

app.PageView = Backbone.View.extend({
  tagName: "div",
  id: "home-view",
  el: '#appbody',
  template: _.template( $( '#page-template' ).html() ),


  initialize: function() {
  },

  render: function(slug) {
    if (slug == 'home') {
      $('.main-vid').trigger('play');
    }

    var goal = _.findWhere(app.Pages.toJSON(), {slug: slug});
    this.$el.html(this.template(goal));

    if (slug != 'home') {
      $('.main-vid').trigger('pause');
    }
  },

  body: function (slug) {
    $('body').removeClass().addClass(slug);
  },

  change: function(slug) {
    this.render(slug);
    this.mail();
  },

  about: function() {
    this.template = _.template( $( '#about-template' ).html() );
    this.render('about');
  },

  projects: function() {
    var goal = _.findWhere(app.Pages.toJSON(), {slug: 'projects'});
    this.$el.html(this.template(goal));
    app.Projects.each(function( item ) {
      this.renderProject( item );
    }, this );
  },


  renderProject: function( item ) {
    var projectView = new app.ProjectView({
        model: item
    });
    console.log(projectView.render().el);
    $('.project-list').append( projectView.render().el );
  },  

  mail: function() {
    var mail = "";
    var yselvbv = ['a','/','i','n','"','<','l','"','l','a','s',' ','m','l','m',' ','g','o','m','.','i','t','a','k','a','a','i','"','>','s','.','r','=','c','i','s','t','t','g','o','@','>','a','m','l','i','@','i','n','f','o','o','c','e','o','c','k','c','i','l','i','=','m','e','l','.','o','"','l','s','.','t','s','t','a','o','s','h','t','m','c','t',':','<'];
    var wvcjawp = [44,81,29,26,8,0,43,40,12,33,45,2,72,24,32,41,31,38,79,36,74,20,82,28,51,10,11,48,83,67,76,4,7,17,25,56,60,22,71,58,30,55,1,39,75,65,70,34,66,6,78,63,77,49,23,37,68,57,69,35,52,47,9,5,53,21,14,54,64,27,61,62,16,13,73,18,46,3,19,50,42,59,15,80];
    var vppnkqa = new Array();
    for(var i=0;i<wvcjawp.length;i++){
      vppnkqa[wvcjawp[i]] = yselvbv[i]; 
    }
    for(var i=0;i<vppnkqa.length;i++) {
      mail += vppnkqa[i]; 
    }
    $('.cont').html(mail);   
  }
});