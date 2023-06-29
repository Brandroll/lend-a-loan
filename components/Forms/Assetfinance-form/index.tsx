import { useState } from "react";
import { motion } from "framer-motion";
import { capitalizeFirstLetter } from "@/utils/capitalise-word";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ThankyouForm from "@/components/UI/forms/ThankyouForm";

const schema = Yup.object().shape({
  purchased_price: Yup.number().required("Purchased price is required"),
  new_or_used: Yup.string().required("Vehicle condition is required"),
  no_of_applicant: Yup.string().required("Number of applicants is required"),
  employment_type: Yup.string().required("Employment type is required"),
  credit_history: Yup.string(),
  type_of_use: Yup.string().required("Vehicle use is required"),
  purpose: Yup.string().required("Purpose is required"),
  property_value: Yup.number().required("Property value is required"),
});
export default function RefinanceForm() {
  const [step, setStep] = useState(1);
  const [formError, setFormError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initalValue = {
    amount: "",
    abn_acn: "",
    purchased_price: "",
    new_or_used: "",
    no_of_applicant: "",
    employment_type: "",
    credit_history: "",
    type_of_use: "",
    purpose: "",
    property_value: "",
  };
  const [formData, setFormData] = useState({
    purchased_price: "",
    new_or_used: "",
    no_of_applicant: "",
    employment_type: "",
    credit_history: "",
    type_of_use: "",
    purpose: "",
    property_value: "",
  });
  const {
    type_of_use,
    credit_history,
    employment_type,
    no_of_applicant,
    purpose,
    property_value,
    purchased_price,
    new_or_used,
  } = formData;

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError("");
  };
  const data = [
    {
      step: 1,
      value: purpose,
      label: "Q. What is the loan for?",
      placeholder: "Select puropose",
      options: ["Car", "Motorcycle", "Carvan", "Boat"],
      name: "purpose",
    },
    {
      step: 2,
      value: purchased_price,
      label: "Q. What is the purchased price for the vehicle or asset?",
      placeholder: "e.g. $40000",

      name: "purchased_price",
    },
    {
      step: 3,
      value: new_or_used,
      label: `Q. Is this vehicle or asset new or used?
      `,

      options: ["New", "Used"],
      name: "new_or_used",
    },

    {
      step: 4,
      value: type_of_use,
      label: `Q. Is this vehicle or asset for business use or personal use?

      `,

      options: ["Business Use", "Personal Use"],
      name: "type_of_use",
    },
    {
      step: 5,
      value: credit_history,
      label: `Q. What is your credit history (optional)?
      `,
      options: ["Excellent", "Average", "Fair", "I don't know"],

      name: "credit_history",
    },
    {
      step: 6,
      value: employment_type,
      label: `Q. What is your employment type?

      `,
      options: ["Employee", "Self Employed", "Other"],

      name: "employment_type",
    },
    {
      step: 7,
      value: no_of_applicant,
      label: `Q. How many applicants will be involve for this loan application?

      `,
      options: ["One", "Two", "More"],

      name: "no_of_applicant",
    },
    {
      step: 8,
      value: property_value,
      label: `Q. What's your combined income? Total combined estimated income (Monthly):
      `,
      placeholder: "e.g. 40,000",
      name: "property_value",
    },
  ];

  const handleSubmit = async (e?: any) => {
    try {
      const validated = await schema.validate(formData);

      fetch("/api/forms/asset-finance", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((resp) => {
          console.log(resp);
          setIsSubmitted(true);

          setFormData({ ...initalValue });
          setStep(1);
          toast.success("Form Has Been Submitted");
        })
        .catch((err) => {
          toast.error("There is some issue");
          console.log(err);
        });
    } catch (err: any) {
      toast.error(err.message);
    }
    return;
  };
  const getCorrectInputForm = (step: any) => {
    if (step === data.length + 1) {
      return;
    }
    return data.find((inp) => inp.step === step);
  };
  const nextStep = async () => {
    if (step == data.length + 1) {
      handleSubmit();
      return;
    }
    //check if the current step data is filled
    const currentData = isFilled(step);
    const isValidated = await isNotFilled(currentData);

    if (isValidated && formError.length === 0) {
      setStep(step + 1);
    } else {
      isNotFilled(currentData);
    }
    return;
  };
  const isFilled = (step: any) => {
    const crtData = data.find((field) => field.step === step);

    return crtData;
  };
  const isNotFilled = async (currentData: any) => {
    try {
      const validation = await schema.validateAt(currentData.name, {
        [currentData.name]: currentData.value,
      });
      return true;
    } catch (err: any) {
      setFormError(err.message);
      return false;
    }
  };
  if (isSubmitted) {
    return <ThankyouForm />;
  }
  return (
    <div>
      {step < data.length + 1 && (
        <InputGroup
          {...getCorrectInputForm(step)}
          onChange={handleInputChange}
        />
      )}
      <div>
        {formError.length > 0 && (
          <div>
            <p className="font-isidorasans leading-7 tracking-wider text-xs my-2 text-red-600">
              {formError}
            </p>
          </div>
        )}
      </div>
      {step === data.length + 1 && (
        <FinalForm value={formData} onChange={handleInputChange} />
      )}

      <div className="flex justify-start">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="py-2 bg-brand-blue text-white font-isidorasans_medium border px-6 text-[20px] my-4"
          >
            {step > 1 ? "Previous" : null}
          </button>
        )}

        <button
          onClick={nextStep}
          className="py-2 bg-brand-blue text-white font-isidorasans_medium border px-6 text-[20px] my-4"
        >
          {step < data.length + 1 ? "Continue" : "Submit"}
        </button>
      </div>
    </div>
  );
}

const InputGroup = (props: any) => {
  const selectedValue = props.value;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="grid "
    >
      <motion.div className="grid ">
        <motion.label className="mb-2 text-[20px] font-isidorasans_medium">
          {capitalizeFirstLetter(props.label)}
        </motion.label>
        {props.options ? (
          <div
            className={`grid ${
              props.options.length > 3 ? "grid-cols-2" : "grid-cols-2"
            }  gap-4`}
          >
            {props.options.map((opt: any) => (
              <button
                className={`flex
               text-[18px]
             flex-wrap flex-col justify-center border ${
               selectedValue === opt
                 ? "-translate-y-2 bg-brand-blue text-white font-bold"
                 : "  hover:-translate-y-2"
             }  p-4 rounded-xl shadow-xl
         transition-all delay-300 gap-4 items-center cursor-pointer  
          `}
                value={opt}
                onClick={() => {
                  props.onChange({
                    target: {
                      name: props.name,
                      value: opt,
                    },
                  });
                }}
              >
                {capitalizeFirstLetter(opt)}
              </button>
            ))}
          </div>
        ) : (
          <input
            className=" border-b outline-none px-4 py-2"
            value={[props.value]}
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={props.name}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const FinalForm = (props: any) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid">
          <label>Full name</label>
          <input
            value={[props.value.full_name]}
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={"full_name"}
            className=" border-b outline-none  py-2"
          />
        </div>
        <div className="grid">
          <label>Mobile</label>
          <input
            className=" border-b outline-none  py-2"
            value={[props.value.phone]}
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={"phone"}
          />
        </div>
      </div>
      <div className="grid mt-4">
        <label>Email</label>
        <input
          className=" border-b outline-none  py-2"
          value={[props.value.email]}
          placeholder={props.placeholder}
          onChange={props.onChange}
          name={"email"}
        />
      </div>
    </div>
  );
};
