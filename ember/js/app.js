// Deal with *.*
jQuery.ajaxSetup({
  headers: { "Accept": "application/json" }
});

var App = Ember.Application.create();

DS.RESTAdapter.configure("plurals", {
  "inventory": "inventory"
});
App.store = DS.Store.create({
    revision: 11,
    adapter: DS.RESTAdapter.create({
        url: 'https://books.innoq.com'
    })
});

App.Inventory = DS.Model.extend({
  items: DS.hasMany('App.Item', {embedded: true})
});

App.Item = DS.Model.extend({
  inventory: DS.belongsTo('App.Inventory')
});

App.Person = DS.Model.extend({
});

// App.Person.find(1);

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