import React from "react";
import {ReactComponent as Page404Icon} from "../../../assets/pageNotFound.svg";

const Page404: React.FC = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <Page404Icon style={{width: '150px', height: '150px'}} />
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Please check the URL or return to the homepage.</p>
            <a href="/">Go to Homepage</a>
        </div>
    )
}

export default Page404;