import { useEffect, useState } from "react";
import { Auth, API } from "aws-amplify";


const PrivateComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [credential, setCredential] = useState("")
    const [Result, setResult] = useState("");

    useEffect(() => {
        Auth.currentSession().then(async (data) => {
            let token = (await Auth
                .currentSession())
                .getIdToken()
                .getJwtToken();
                
            setCredential(token);
        }
        )
    }, []);


    if (isLoggedIn) {
        API.get("private", "/private", {
            headers: {
                Authorization: `Bearer ${credential}`
            }
        }).then((result) => {
            setResult(result)
            setIsLoggedIn(true)
        }).catch((error) => {
            console.log(error.message)
        })
    }


    return (
        <div className="App">
            {isLoggedIn & <p> Hi, You are logged in. </p> || <p> You are not logged in</p>}
        </div>
    );

};

export default PrivateComponent;
