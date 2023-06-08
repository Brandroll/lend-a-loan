import React from "react";

export default function bookconsultation() {
  return (
    <div>
      <div className="max-w-site-full mx-auto">
        <div className="mt-8 px-5 p-1 text-brand-blue md:mt-32 font-isidorasans_semi_bold flex items-center gap-4 text-20px cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-12 h-12 text-brand-blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
        </div>
        <div className="my-8 px-5 md:px-0">
          <section className="grid lg:grid-cols-12">
            <section className="col-span-12">
              <iframe
                src="https://app.squarespacescheduling.com/schedule.php?owner=29084236"
                title="Schedule Appointment"
                width="100%"
                height="1080"
                frameBorder="0"
              ></iframe>
              <script
                src="https://embed.acuityscheduling.com/js/embed.js"
                type="text/javascript"
              ></script>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
