import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import PlantListPage from "pages/PlantListPage";
import PlantShowPage from "pages/PlantShowPage";
import ScrollToTop from "shared-components/ScrollToTop";
import * as userService from "services/user";
import SessionContext from "contexts/sessionContext";

const App = () => {
    const [sessionToken, setSessionToken] = useState(() =>
        userService.getSessionTokenStorage()
    );

    return (
        <SessionContext.Provider value={{
          username: sessionToken ? jwtDecode(sessionToken).username : null,
          signIn: (token) => {
            setSessionToken(token);
            userService.setSessionTokenStorage(token);
          },
          signOut: () => {
            setSessionToken(null);
            userService.removeSessionTokenStorage();
          }
        }}>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/plants" element={<PlantListPage />} />
                    <Route path="/plants/:plantId" element={<PlantShowPage />} />
                </Routes>
            </BrowserRouter>
        </SessionContext.Provider>
    );
};

export default App;
