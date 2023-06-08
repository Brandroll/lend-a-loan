import { useEffect, useState } from "react";
import Email from "./Email";
import FullName from "./FullName";
import MobileNo from "./MobileNo";
import axios from "axios";
import { toast } from "react-toastify";

export default function index() {
  const [currentForm, setCurrentForm] = useState(1);
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [fullName, setFullName] = useState("");
  const nextStep = () => {
    if (currentForm === 1) {
      setCurrentForm(2);
    }
    if (currentForm === 2) {
      setCurrentForm(3);
    }
    if (currentForm === 3) {
      setCurrentForm(4);
    }
  };
  useEffect(() => {
    if (currentForm >= 4) {
      submitForm();
    }
  }, [currentForm]);
  const submitForm = () => {
    axios.post(`/api/footer`, {
      data: {
        email,
        fullName,
        phoneNo,
      },
    });
    //   .then((res) => {
    //     if (res.data.message) {
    //       toast.success(res.data.message);
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.error);
    //   });
  };
  return (
    <div
      className={`grid grid-cols-1 ${
        currentForm < 4 && "border "
      }  items-center pr-2`}
    >
      <div className="flex justify-between  items-center">
        {currentForm === 1 && <Email onChange={setEmail} value={email} />}
        {currentForm === 2 && (
          <FullName onChange={setFullName} value={fullName} />
        )}
        {currentForm === 3 && (
          <MobileNo onChange={setPhoneNo} value={phoneNo} />
        )}
        {currentForm === 4 && "Submitted"}
        {currentForm < 4 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8  text-brand-blue  h-12  ${
              currentForm < 4 && "border-l"
            } pl-1     `}
            onClick={nextStep}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

const Submitted = () => {
  <div></div>;
};
