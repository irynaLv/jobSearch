const FormRow = ({ type, name, labelText, defaultVlue, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultVlue}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRow;
