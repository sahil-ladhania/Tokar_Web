
export const FormInput = ({ label, id, type = "text", register, error }) => (
    <div>
      <label htmlFor={id} className="block mb-1 text-white">{label}</label>
      <input
        {...register(id)}
        id={id}
        type={type}
        placeholder={label}
        className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
);