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
  }

  deleteItem = (id) => {
    this.setState(({data}) => {

      return {
        data: data.filter(el => el.id !== id)
      }
    })
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
                onDelete={this.deleteItem}/>
            <EmployeesAddForm/>
        </div>
      );
  }
}

export default App;
