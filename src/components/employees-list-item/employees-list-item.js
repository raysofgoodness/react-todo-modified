import './employees-list-item.css';

const EmployeesListItem = ({name, salary, onDelete, onToggleProp, increase, rise}) => {
    let classes = `list-group-item d-flex justify-content-between`;

    if (increase) {
        classes += ' increase';
    }

    if (rise) {
        classes += ' like';
    }

    return (
        <li className={classes}>
                <span
                    onClick={onToggleProp}
                    className="list-group-item-label"
                    data-toggle="rise"
                >
                    {name}
                </span>
            <input className="list-group-item-input" defaultValue={salary + '$'} type="text"/>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    onClick={onToggleProp}
                    className="btn-cookie btn-sm"
                    data-toggle="increase">
                    <i className="fas fa-cookie"/>
                </button>
                <button
                    onClick={onDelete}
                    className="btn-trash btn-sm"
                    type="button">
                    <i className="fas fa-trash"/>
                </button>
                <i className="fas fa-star"/>
            </div>
        </li>
    )
}

export default EmployeesListItem;
