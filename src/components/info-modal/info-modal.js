import './info-modal.css'

const InfoModal = ({onClose, show}) => {
    let classes = 'info-modal';

    if (show) {
        classes += ' show';
    }

    return (
        <div className={classes}>
            <p className="info-modal__text">
                Please fill in the field name and salary
            </p>
            <span
                onClick={onClose}
                className="info-modal__close">
                X
            </span>
        </div>
    )
}


export default InfoModal;
