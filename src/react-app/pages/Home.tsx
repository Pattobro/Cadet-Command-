import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { MicrosoftLogin } from 'react-microsoft-login';

const Home = () => {
    const handleGoogleResponse = (response) => {
        console.log(response);
    };

    const handleMicrosoftResponse = (response) => {
        console.log(response);
    };

    return (
        <div>
            <h1>Home Page</h1>
            <GoogleLogin
                clientId="YOUR_GOOGLE_CLIENT_ID"
                buttonText="Login with Google"
                onSuccess={handleGoogleResponse}
                onFailure={handleGoogleResponse}
                cookiePolicy={'single_host_origin'}
            />
            <MicrosoftLogin
                clientId="YOUR_MICROSOFT_CLIENT_ID"
                authCallback={handleMicrosoftResponse}
                textButton="Login with Microsoft"
            />
        </div>
    );
};

export default Home;