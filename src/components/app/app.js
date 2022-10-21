import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {name: "Roman B.", salary: 2000, increase: true},
    {name: "Ivan M.", salary: 1500, increase: false},
    {name: "Sergey L.", salary: 780, increase: false},
    {name: "Eddie ", salary: 666, increase: true},
  ];

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
