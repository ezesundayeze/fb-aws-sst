// import '../App.css';
import { AmplifyFacebookButton, AmplifySignUp } from '@aws-amplify/ui-react';

const Login = () => {
    return (
        <>
            <div style={{ width: "50%" }}>
                <AmplifySignUp></AmplifySignUp>
                <AmplifyFacebookButton />
            </div>

        </>

    );
}

export default Login;