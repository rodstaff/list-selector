import React from 'react';
import ReactDOM from 'react-dom';

var FilteredList = React.createClass({
  getInitialState: function() {
    return {
      initialItems: [
         "Apples",
         "Broccoli",
         "Beef",
         "Broccoli",
         "Cabbage",
         "Chicken",
         "Corn Syrup",
         "Duck",
         "Eggs",
         "Fish",
         "Flour",
         "Granola",
         "Hash Browns",
         "Potatoes",
         "Red Pepppers",
         "Soy Sauce",
         "Spinach",
         "String Beans",
         "Tomatoes",
         "Vinegar",
         "Watermelon"
      ],
      items: []
    };
  },
  filterList: function(ev) {
    var updatedList = this.state.initialItems.filter(function(item) {
      return (
        item.toLowerCase().search(
          ev.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({
      items: updatedList
    });
  },
  componentWillMount:  function() {
    this.setState({
      items: this.state.initialItems
    });
  },
  render: function() {
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList} />
        <List items={this.state.items} />
      </div>
    );
  }
});

var List = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.items.map(function(item) {
          return (
            <li key={item}>{item}</li>
          );
        }) }
      </ul>
    );
  }
});

ReactDOM.render(
  <FilteredList/>, document.getElementById('root')
);