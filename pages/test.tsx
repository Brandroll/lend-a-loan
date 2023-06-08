import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import MyFormComponent from "@/components/Forms/ConversationalForm";

const Test: React.FC = () => {
  const [showForm, setShowForm] = React.useState(true);

  const handleFormSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setShowForm(false);
  };

  return (
    <div className="max-w-site-full mx-auto my-12 text-center">
      <AnimatePresence>
        {showForm && (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MyFormComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Test;
