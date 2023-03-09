import React, { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  type?: string;
  shadow?: boolean;
  variant?: "normal" | "solid" | "outline" | "line";
  dimension?: "small" | "medium" | "big";
}

const ContactInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      name,
      error,
      children,
      variant = "normal",
      dimension = "medium",
      shadow = false,
      disabled = false,
      type = "text",
      inputClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={"grid col-span-2 lg:col-span-1"}>
        {label && (
          <label
            htmlFor={name}
            className=" text-18px block text-left mb-3  font-isidorasans_semi_bold leading-none text-gray-800"
          >
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={label}
          ref={ref}
          className="p-4   border    rounded-md outline-none"
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-invalid={error ? "true" : "false"}
          {...rest}
        />
        {error && <p className="mt-2 text-xs  text-red-500">{error}</p>}
      </div>
    );
  }
);
ContactInput.displayName = "Input";
export default ContactInput;
