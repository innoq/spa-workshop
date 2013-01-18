// Here's my data model
function Item(data) {
    this.book = ko.observable(data.book);
    this.location = ko.observable(data.owner);
    this.status = ko.observable(data.status);
    this.owner = ko.observable(data.owner);
}

function ItemListViewModel() {
    // Data
    var self = this;
    self.items = ko.observableArray([]);

    // Load initial state from server, convert it to Item instances, then populate self.items
    $.ajax({
        url: "/inventory",
        headers: {
            'Accept': 'application/json'
        },
        success: function(data) {
            var mappedItems = $.map(allData, function(item) { return new Item(item) });
            self.Items(mappedItems);
        }
    });
}

ko.applyBindings(new ItemListViewModel());
