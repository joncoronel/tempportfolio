import styles from "./form.module.css";

export default function InputWrapper({
  errors,
  name,
  placeholder,
  register,
  validationRules,
  type = "Input",
}) {
  // Determine the component type
  const Component = type === "Textarea" ? "textarea" : "input";

  // Common props for both input and textarea
  const commonProps = {
    className: `flex w-full rounded-md bg-primary-500 p-2 ${styles.input} resize-none`,
    placeholder,
    rows: "5",
    "aria-invalid": errors[name] ? "true" : "false",
    ...register(name, validationRules),
  };

  return (
    <div className="relative">
      <Component {...commonProps} />

      {errors[name] && (
        <p className="absolute -bottom-5 right-0 text-xs text-danger-500">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}
