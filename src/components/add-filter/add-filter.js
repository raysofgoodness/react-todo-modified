import {Component} from "react";
import './add-filter.css';


class AddFilter extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            data: this.props.data,
            activeFilter: null
        }
        this.startData = this.props.data;
        this.onUpdateFilter = this.props.onUpdateFilter;*/
    }

    /*showFullData = () => {
        this.setState({data: this.startData, activeFilter: null});
        this.onUpdateFilter(this.startData);
    }

    onFilterPromotion = () => {
        const filteredData = this.props.data.filter(item => item.rise === true);
        this.setState({data: filteredData, activeFilter: 'promotion'});
        this.onUpdateFilter(filteredData);
    }

    onFilterSalary = () => {
        const filteredData = this.props.data.filter(item => item.salary > 1500);
        this.setState({data: filteredData, activeFilter: 'salary'});
        this.onUpdateFilter(filteredData);
    }*/

    render() {
        return (
            <div className="btn-group mt-4">
                <button
                    className="btn btn-light"
                    // onClick={this.showFullData}
                    type="button">
                    All employees
                </button>
                <button
                    className="btn btn-outline-light"
                    // onClick={this.onFilterPromotion}
                    type="button">
                    Employees for promotion
                </button>
                <button
                    className="btn btn-outline-light"
                    // onClick={this.onFilterSalary}
                    type="button">
                    Salary over 1500
                </button>
            </div>
        );
    }
}


export default AddFilter;
