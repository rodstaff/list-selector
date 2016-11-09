import React from 'react';
import ReactDOM from 'react-dom';

class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: this.props.initialItems,
      items: this.props.items
    }
  }
  filterList(e) {
    var updatedList = this.state.initialItems.filter((item) => {
      return (
        item.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({
      items: updatedList
    });
  }
  render() {
    return (
      <div>
        <h3>Filter your list: </h3>
        <input type="text" onChange={this.filterList.bind(this)} 
          placeholder="type here"
        /> &nbsp;INPUT
        <List items={this.state.items} />
      </div>
    );
  }
}
FilteredList.defaultProps = {
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
}

// class List extends React.Component {
//   render() {
//     var listItems = this.props.items.map((item) => {
//       return (<li key={item}>{item}</li>);
//     })
//     return (
//       <div>
//         <h3>List</h3>
//         <ul>{listItems}</ul>
//       </div>
//     );
//   }
// }
class List extends React.Component {
  render() {
    return (
      <div>
        <h3>List</h3>
        <ul>
         {this.props.items.map((item) => {
           return (
             <li key={item}>{item}</li>
           );
         })}
        </ul>
      </div>
    );
  }
}
List.propTypes = {
  items: React.PropTypes.array.isRequired
}
// List.defaultProps = {
//   items: []
// }

ReactDOM.render(
  <FilteredList/>, document.getElementById('root')
);