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
        {name: "Roman B.", salary: 2000, increase: true, id: 1},
        {name: "Ivan M.", salary: 1500, increase: false, id: 2},
        {name: "Sergey L.", salary: 780, increase: false, id: 3},
        {name: "Eddie ", salary: 666, increase: true, id: 4},
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
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

  // updateDate = (e, value) => {
  //   e.preventDefault();
  //   value.id = this.maxId++
  //   console.log( value)
  //   this.setState(({data}) => {

  //     return {
  //       data: [...data, value]
  //     }

  //   })
  //   console.log(this.state.data)
  // }

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
                onDelete={this.deleteItem}/>
            <EmployeesAddForm
                onAdd={this.addItem}/>
        </div>
      );
  }
}

export default App;
