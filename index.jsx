import { Link } from 'react-router-dom';

function Test() {
    const location = {
        pathname: 'google.com',
    };

    return (
        <Link to={{ ...location }} />
    );
}