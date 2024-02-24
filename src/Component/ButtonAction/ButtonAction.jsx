import './ButtonAction.scss';
function ButtonAction({title, className}) {
    const classes = `button_action ${className}`
    return ( <div className={classes}><button>{title}</button></div> );
}
export default ButtonAction;