import React from 'react';
import ReactDOM from 'react-dom';

var FilteredList = React.createClass({
  getInitialState: function() {
    return {
      initialItems: [
         "Apple | Pyrus malus",
         "Bamboo | Bamboosa aridinarifolia",
         "Banana | Musa paradisicum",
         "Barley | Hordeum vulgare",
         "Black Pepper | Piper nigrum",
         "Carrot | Daucas carota",
         "Cashew Nut | Anacardium occidentale",
         "Clove | Syzgium aromaticum",
         "Coriander | Coriandrum sativum",
         "Cucumber | Cucumis sativas",
         "Dragon fruit | Hylocereus undutus",
         "Green Gram | Phaseolies auicus",
         "Guava | Psidium guava",
         "Ginger | Zingiber officinale",
         "Garlic | Allium sativum",
         "Jack fruit | Artocarpus integra",
         "Lemon | Citrus limonium",
         "Maize | Zea mays",
         "Mango | Mangifera indica",
         "Onion | Allium cepa",
         "Orange | Citrus aurantium",
         "Pea | Pisum sativan",
         "Papaya | Carica papaya",
         "Potato | Solanum tubersum",
         "Pomegranate | Punica granatum",
         "Pineapple | Ananus sativus",
         "Radish | Raphanus sativus",
         "Red maple | Acer rubrum",
         "Rice | Oryza sativa",
         "Soya bean | Glycine max",
         "Spinach | Lactuca sativa",
         "Tomoato | Lycopersican esculentum",
         "Watermelon | Citrullus vulgaris",
         "Wheat | Triticum Aestivum"
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
        <input type="text" placeholder="Type and search here" onChange={this.filterList} /> INPUT
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