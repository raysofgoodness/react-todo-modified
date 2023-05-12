import {Component} from "react";
import './add-form.css';
import InfoModal from "../info-modal/info-modal";

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            showInfoModal: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddItem = (e) => {
        const {name, salary} = this.state;
        e.preventDefault();
        if (name.length > 3 && salary) {
            this.props.onAddItem(name, salary);
            this.setState({name: '', salary: ''});
        } else {
             this.setState({showInfoModal: true})
        }
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form mt-4">
                <h4 className="title">Add New Employee</h4>
                <form
                    onSubmit={this.onAddItem}
                    className="add-form d-flex"
                    action="">
                    <input
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                    />
                    <input
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        type="number"
                        placeholder="Employee salary"
                        name="salary"
                        value={salary}
                    />
                    <button
                        className="btn btn-outline-light"
                        type="submit">
                        Add
                    </button>
                </form>
                 <InfoModal
                    onClose={() => this.setState({showInfoModal: false})}
                    show={this.state.showInfoModal}
                />
            </div>
        )
    }
}

export default AddForm;
