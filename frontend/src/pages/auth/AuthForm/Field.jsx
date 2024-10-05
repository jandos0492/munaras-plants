const Field = ({ field, values, onChange }) => {
    console.log(values)
    return (
        <div key={field.label} className="flex flex-col my-4">
            <label className="text-slate-500 pl-1" htmlFor={field.label}>
                {field.label}
            </label>
            <input
                value={values[field.label]}
                required
                onChange={onChange}
                id={field.label}
                type={field.type}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 focus:outline-emerald-600 w-64"
            />
        </div>
    );
};

export default Field;
