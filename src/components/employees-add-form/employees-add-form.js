import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }

    }

    onInputValue = (e) => {
        // this.setState({

        // })

        console.log(e.target.value)
    }

    render() {
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        onClick={this.onInputValue}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input type="number"
                        onClick={this.onInputValue}
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )

    }

}

export default EmployeesAddForm;