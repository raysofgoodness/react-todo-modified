import {Component} from "react";

import Header from '../header/header';
import Search from "../search/search";
import AddFilter from "../add-filter/add-filter";
import EmployeesList from "../employees-list/employees-list";
import AddForm from "../add-form/add-form";
import InfoModal from "../info-modal/info-modal";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'John Kelly', salary: 1800, increase: false, rise: true, id: 1},
                {name: 'Mike Spencer', salary: 800, increase: true, rise: false, id: 2},
                {name: 'Marshall Mathers', salary: 2400, increase: false, rise: false, id: 3}
            ]
        }
    }



    addItem = (name, salary) => {
       const newItem = {name,
           salary,
           increase: false,
           rise: false,
           id: this.state.data.length + 1};
       const newData = [...this.state.data, newItem];
       this.setState({data: newData});
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
              if (item.id === id) {
                  return {...item, [prop]: !item[prop]}
              }
              return item;
            })
        }));
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase === true).length;
        return (
            <div className='app'>
                <Header
                    numbersEmployees={employees}
                    receiveEmployees={increased}
                />
                <div className="search-panel">
                    <Search/>
                    <AddFilter/>
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <AddForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;
