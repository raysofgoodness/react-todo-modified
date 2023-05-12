import './header.css';

const Header = ({numbersEmployees, receiveEmployees}) => {
    return (
        <header className="header">
            <h1 className="title">Employee Accounting</h1>
            <h2 className="title">Total number of employees: {numbersEmployees}</h2>
            <h3 className="title">Will receive the award: {receiveEmployees}</h3>
        </header>
    );
};

export default Header;
