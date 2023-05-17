import {Component} from "react";

import Header from '../header/header';
import Search from "../search/search";
import AddFilter from "../add-filter/add-filter";
import EmployeesList from "../employees-list/employees-list";
import AddForm from "../add-form/add-form";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'John Kelly', salary: 1800, increase: false, rise: true, id: 1},
                {name: 'Mike Spencer', salary: 800, increase: true, rise: false, id: 2},
                {name: 'Marshall Mathers', salary: 2400, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
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

    searchEpm = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise === true);
            case 'moreThen1000' :
                return items.filter(item => item.salary > 1500);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase === true).length;
        const visibleData = this.filterPost(this.searchEpm(data, term), filter);

        return (
            <div className='app'>
                <Header
                    numbersEmployees={employees}
                    receiveEmployees={increased}
                />
                <div className="search-panel">
                    <Search onUpdateSearch={this.onUpdateSearch}/>
                    <AddFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <AddForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;
