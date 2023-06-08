import { useState } from "react";
import { motion } from "framer-motion";

// Define the form data interface
interface FormData {
  username: string;
  email: string;
  password: string;
}

// Custom form hook
const useForm = (
  initialValues: FormData,
  onSubmit: (data: FormData) => void
) => {
  const [values, setValues] = useState<FormData>(initialValues);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  // Reset the form to initial values
  const resetForm = () => {
    setValues(initialValues);
  };

  // Return the form values, event handlers, and reset function
  return {
    values,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

// Usage example
const MultiStepForm: React.FC = () => {
  // Define initial form values
  const initialFormValues: FormData = {
    username: "",
    email: "",
    password: "",
  };

  // Define form submission handler
  const handleFormSubmit = (data: FormData) => {
    console.log(data);
    // Do something with the form data (e.g., submit to server)
  };

  // Use the custom form hook
  const form = useForm(initialFormValues, handleFormSubmit);

  // Define step state and animation variants
  const [step, setStep] = useState(1);
  const variants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    incoming: { x: "100%", opacity: 0 },
  };

  // Proceed to the next step
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Go back to the previous step
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <motion.div
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {step === 1 && (
          <motion.div>
            <h2>Step 1</h2>
            <form onSubmit={form.handleSubmit}>
              <input
                type="text"
                name="username"
                value={form.values.username}
                onChange={form.handleChange}
                placeholder="Username"
              />
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </form>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial="incoming"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <h2>Step 2</h2>
            <form onSubmit={form.handleSubmit}>
              <input
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                placeholder="Email"
              />
              <button type="button" onClick={prevStep}>
                Previous
              </button>
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </form>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div>
            <h2>Step 3</h2>
            <form onSubmit={form.handleSubmit}>
              <input
                type="password"
                name="password"
                value={form.values.password}
                onChange={form.handleChange}
                placeholder="Password"
              />
              <button type="button" onClick={prevStep}>
                Previous
              </button>
              <button type="submit">Submit</button>
              <button type="button" onClick={form.resetForm}>
                Reset
              </button>
            </form>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default MultiStepForm;
