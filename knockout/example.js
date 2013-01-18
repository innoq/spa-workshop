// Here's my data model
function InventoryItem(data) {
    this.book = ko.observable(data.book);
    this.location = ko.observable(data.owner);
    this.status = ko.observable(data.status);
    this.owner = ko.observable(data.owner);
}

function Item(data) {
    this.asin = ko.observable(data.asin);
    this.aUrl = ko.observable(data.aUrl);
    this.imgUrl = ko.observable(data.imgUrl);
    this.manufacturer = ko.observable(data.Manufacturer);
    this.productGroup = ko.observable(data.ProductGroup);
    this.title = ko.observable(data.Title);
}




function ItemListViewModel() {
    // Data
    var self = this;
    self.items = ko.observableArray();

    // Load initial state from server, convert it to InventoryItem instances, then populate self.items
    $.ajax({
        url: "/inventory",
        headers: {
            'Accept': 'application/json'
        },
        success: function(data) {
            var mappedItems = $.map(data.items, function(item) { return new InventoryItem(item) });
            self.items(mappedItems)
        }
    });
}

function itemDetails(itemUri) {
    $.ajax({
        url: itemUri,
        headers: {
            'Accept': 'application/json'
        },
        success: function(data) {
            var mappedItems = $.map(data, function(item) { return new Item(item) });
        }
    });
}



var viewModel = window.viewModel = new ItemListViewModel();
ko.applyBindings(viewModel);
