var app = app || {};

app.Contact = Backbone.Model.extend({
    schema: {
        name:       'Text',
        email:      { validators: ['required', 'email'] },
    }
});