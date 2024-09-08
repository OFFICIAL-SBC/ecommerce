
import PropTypes from 'prop-types';

const Layout = ({ css ,children }) =>{
    return (
        <div className={css}>
            {children}
        </div>
    );
};


Layout.propTypes  = {
    children: PropTypes.node.isRequired,
    css: PropTypes.string.isRequired
}

export default Layout;