import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/signInComponent/signInComponent';

const Signin = ({ router }) => {
    const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>;
        } else {
            return;
        }
    };

    return (
        <>

            {showRedirectMessage()}
            <SigninComponent />

        </>
    );
};

export default withRouter(Signin);