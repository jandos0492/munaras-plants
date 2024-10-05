import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import RedirectToPlantsIfSignedIn from "../../shared-components/RedirectToPlantsIfSignedIn";

const SignInPage = () => {
    const [error, setError] = useState("");
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <RedirectToPlantsIfSignedIn>
            <FormContainer>
                <div className="text-red-700 font-lato">{error}</div>
                {location.state?.accountCreated && (
                    <div className="mt-2 mb-8 p-4 py-2 border border-emerald-500 rounded-lg bg-green-200 text-emerald-700 font-lato">
                        Account created successfully. Please sign in
                    </div>
                )}
                <AuthForm
                    fields={[
                        {
                            label: "username",
                            type: "text",
                        },
                        {
                            label: "password",
                            type: "password",
                        },
                    ]}
                    submitButtonLabel="sign in"
                    onSubmit={async (values) => {
                        try {
                            await dispatch(
                                sessionActions.login({ username: values.username, password: values.password })
                            );
                            navigate("/plants");
                        } catch (res) {
                            const data = await res.json();
                            if (data && data.errors) setError(data.errors[0]);
                        }
                    }}
                />
                <Link
                    to="/sign-up"
                    className="text-green-600 underline text-sm"
                >
                    create an account
                </Link>
            </FormContainer>
        </RedirectToPlantsIfSignedIn>
    );
};

export default SignInPage;
