import { useState } from "react";
import Field from "./Field";

const AuthForm = ({ fields, submitButtonLabel, onSubmit }) => {
    const [values, setValues] = useState(() => {
        const initialState = {};
        for (let field of fields) {
            initialState[field.label] = "";
        }
        return initialState;
    });
    const [loading, setLoading] = useState(false);

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                await onSubmit(values);
                setLoading(false);
            }}
            className="bg-white border border-slate-300 rounded-lg m-4 p-4 font-lato"
        >
            {fields.map((field) => (
                <Field
                    key={field.label}
                    field={field}
                    onChange={(e) => {
                        setValues({ ...values, [field.label]: e.target.value });
                    }}
                    values={values}
                />
            ))}
            <button className="bg-emerald-700 text-white w-full rounded-lg mt-4 py-2 relative">
                {submitButtonLabel}
                {loading && (
                    <div className="absolute top-0 right-4 flex items-center h-full">
                        <i className="fa-solid fa-spinner-third text-green-300 text-xl animate-spin"></i>
                    </div>
                )}
            </button>
        </form>
    );
};

export default AuthForm;
