import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        data: [
        {name: "Roman B.", salary: 2000, increase: true, rise: true, id: 1},
        {name: "Ivan M.", salary: 1500, increase: false, rise: false, id: 2},
        {name: "Sergey L.", salary: 780, increase: false, rise: false, id: 3},
        {name: "Eddie ", salary: 666, increase: true, rise: false, id: 4},
      ]
    }

    this.maxId = 5
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(el => el.id !== id)
      }
    })
  }

  addItem = (item) => {
    const newItem = {
        ...item,
        increase: false,
        rise: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

  onToggleIncrease = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = {...old, increase: !old.increase};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }

  onToggleRise = (id) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);
      
    //   const old = data[index];
    //   const newItem = {...old, rise: !old.rise};
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //   return {
    //     data: newArr
    //   }
    // })

    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, rise: !item.rise}
        }
        return item
      })
    }))
  }

  render() { 
      return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onIncrease={this.onToggleIncrease}
                onRise={this.onToggleRise}/>
            <EmployeesAddForm
                onAdd={this.addItem}/>
        </div>
      );
  }
}

export default App;
