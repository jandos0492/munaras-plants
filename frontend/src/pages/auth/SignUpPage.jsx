import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import RedirectToPlantsIfSignedIn from "../../shared-components/RedirectToPlantsIfSignedIn";

const SignUpPage = () => {
    const [error, setError] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        if (values.username.length < 4) {
            setError("Username too short");
            return;
        }

        if (values.password.length < 6) { // Минимальная длина 6 символов, как указано в бэкенде
            setError("Password too short");
            return;
        }

        if (values.password !== values["confirm password"]) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await dispatch(
                sessionActions.signup({
                    username: values.username,
                    password: values.password,
                })
            );

            if (response.ok) { // Используем response.ok вместо status
                setError("");
                navigate("/", {
                    state: { accountCreated: true },
                });
            } else {
                const data = await response.json();
                setError(data.errors?.[0] || "Signup failed");
            }
        } catch (err) {
            setError("An error occurred during registration.");
        }
    };

    return (
        <RedirectToPlantsIfSignedIn>
            <FormContainer>
                <div className="text-red-700 font-lato">{error}</div>
                <AuthForm
                    fields={[
                        { label: "username", type: "text" },
                        { label: "password", type: "password" },
                        { label: "confirm password", type: "password" },
                    ]}
                    submitButtonLabel="Create Account"
                    onSubmit={handleSubmit}
                />
                <Link to="/" className="text-green-600 underline text-sm">
                    Sign In
                </Link>
            </FormContainer>
        </RedirectToPlantsIfSignedIn>
    );
};

export default SignUpPage;