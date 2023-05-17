import './add-filter.css';

const AddFilter = ({filter, onFilterSelect}) => {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'Employees for promotion'},
        {name: 'moreThen1000', label: 'Salary over 1500'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        return (
            <button
                className={`btn ${name === filter ? 'btn-light' : 'btn-outline-light'}`}
                key={name}
                onClick={() => onFilterSelect(name)}
                type="button">
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group mt-4">
            {buttons}
        </div>
    );
}


export default AddFilter;
