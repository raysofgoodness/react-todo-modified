import './add-filter.css';

const AddFilter = () => {
    return (
        <div className="btn-group mt-4">
            <button
                className="btn btn-light"
                type="button">
                All employees
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Employees for promotion
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Salary over 1500
            </button>
        </div>
    );
}

export default AddFilter;
