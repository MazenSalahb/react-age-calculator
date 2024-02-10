import PropTypes from "prop-types";
import styles from "./Input.module.css";

function Input({ label, placeholder, maxLength, setForm, form, error }) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <p className={error[label] && styles.labelError}>{label}</p>
        <input
          className={error[label] && styles.inputError}
          type="text"
          placeholder={placeholder}
          maxLength={maxLength}
          value={form.label}
          onChange={(e) => {
            setForm((prev) => ({ ...prev, [label]: e.target.value }));
          }}
        />
      </div>
      {error[label] && <p className={styles.error}>{error[label]}</p>}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  setForm: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired, // Added 'form' to PropTypes validation
  error: PropTypes.object,
};

export default Input;
