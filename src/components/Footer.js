import '../App.css';

const Footer = props => {
    return (
        <footer className='footer'>
            <div className='date'>{props.date}</div>
            <div className='copyright'>{props.copyright}</div>
        </footer>
    );
};

export default Footer;