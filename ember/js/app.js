var App = Ember.Application.create();

App.store = DS.Store.create({
    revision: 11,
    adapter: DS.RESTAdapter.create({
        url: 'https://books.innoq.com'
    })
});

App.Person = DS.Model.extend({
});

App.Person.find(1);

App.ApplicationController = Ember.Controller.extend();
App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
})

App.initialize();