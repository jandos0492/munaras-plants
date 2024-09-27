import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/sessionContext";

const RedirectToPlantsIfSignedIn = ({ children }) => {
    const { username } = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (username) {
            navigate("/plants")
        }
    }, [username]);

    return children;
};

export default RedirectToPlantsIfSignedIn;