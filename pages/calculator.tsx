import SimpleHero from "@/components/Common/SimpleHero";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import Link from "next/link";

export default function Calculator(props: any) {
  const { pageData } = props;

  const data = [
    {
      title: `Borrowing power calculator`,
      desc: `Use your details to estimate how much you could borrow.
      Link to calculator to be embed`,
      svgIcon: `<svg  viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.772 18.667C21.4962 17.887 20.9853 17.2117 20.3098 16.7341C19.6343 16.2565 18.8273 16 18 16V15H16V16C14.9391 16 13.9217 16.4214 13.1716 17.1716C12.4214 17.9217 12 18.9391 12 20C12 21.0609 12.4214 22.0783 13.1716 22.8284C13.9217 23.5786 14.9391 24 16 24V28C15.13 28 14.389 27.445 14.113 26.667C14.0721 26.5397 14.006 26.4219 13.9187 26.3206C13.8315 26.2193 13.7248 26.1365 13.605 26.0772C13.4851 26.0178 13.3546 25.9831 13.2212 25.9751C13.0877 25.967 12.954 25.9858 12.8279 26.0304C12.7018 26.0749 12.586 26.1443 12.4872 26.2344C12.3884 26.3245 12.3087 26.4335 12.2527 26.5549C12.1968 26.6764 12.1658 26.8078 12.1616 26.9415C12.1573 27.0751 12.1799 27.2082 12.228 27.333C12.5038 28.113 13.0147 28.7883 13.6902 29.2659C14.3657 29.7435 15.1727 30 16 30V31H18V30C19.0609 30 20.0783 29.5786 20.8284 28.8284C21.5786 28.0783 22 27.0609 22 26C22 24.9391 21.5786 23.9217 20.8284 23.1716C20.0783 22.4214 19.0609 22 18 22V18C18.4136 17.9999 18.8171 18.128 19.1549 18.3668C19.4926 18.6055 19.7481 18.9431 19.886 19.333C19.9743 19.5831 20.1584 19.7879 20.3977 19.9023C20.5162 19.9589 20.6446 19.9917 20.7758 19.9987C20.9069 20.0056 21.0382 19.9867 21.162 19.943C21.2858 19.8993 21.3998 19.8316 21.4975 19.7438C21.5952 19.656 21.6746 19.5498 21.7313 19.4313C21.7879 19.3128 21.8207 19.1844 21.8277 19.0532C21.8346 18.9221 21.8157 18.7908 21.772 18.667ZM16 18C15.4696 18 14.9609 18.2107 14.5858 18.5858C14.2107 18.9609 14 19.4696 14 20C14 20.5304 14.2107 21.0391 14.5858 21.4142C14.9609 21.7893 15.4696 22 16 22V18ZM18 28C18.5304 28 19.0391 27.7893 19.4142 27.4142C19.7893 27.0391 20 26.5304 20 26C20 25.4696 19.7893 24.9609 19.4142 24.5858C19.0391 24.2107 18.5304 24 18 24V28Z" fill="#61C0CD"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15298 2.621C8.60698 1.42 12.633 0 17.039 0C21.353 0 25.273 1.361 27.714 2.546L27.852 2.613C28.588 2.977 29.182 3.321 29.6 3.6L25.906 9C34.422 17.706 41 35.997 17.039 35.997C-6.92202 35.997 -0.521019 18.038 8.06898 9L4.39898 3.6C4.68198 3.415 5.04098 3.2 5.46898 2.972C5.68098 2.858 5.90898 2.74 6.15298 2.621ZM23.532 8.928L26.489 4.605C23.739 4.803 20.467 5.449 17.317 6.361C15.067 7.011 12.567 6.912 10.252 6.485C9.66861 6.37685 9.08925 6.2481 8.51498 6.099L10.435 8.926C14.55 10.391 19.416 10.391 23.532 8.928ZM9.27998 10.63C14.095 12.49 19.882 12.49 24.697 10.628C26.7069 12.7467 28.3882 15.1544 29.685 17.771C31.037 20.529 31.773 23.286 31.653 25.662C31.537 27.955 30.635 29.914 28.575 31.37C26.428 32.887 22.817 33.997 17.038 33.997C11.253 33.997 7.62498 32.906 5.45798 31.406C3.38298 29.968 2.47198 28.036 2.34298 25.774C2.20798 23.424 2.92798 20.681 4.27498 17.904C5.55998 15.256 7.35298 12.707 9.27998 10.63ZM8.12998 3.916C8.92998 4.154 9.76598 4.361 10.614 4.518C12.764 4.914 14.92 4.972 16.76 4.439C18.9042 3.81434 21.085 3.32307 23.29 2.968C21.45 2.414 19.298 2 17.038 2C13.593 2 10.38 2.961 8.12998 3.916Z" fill="#61C0CD"/>
      </svg>
      
      
      `,
      href: "/calculator/borrowing-power-calculator",
    },

    {
      title: "Stamp duty calculator",
      desc: `Find out how much stamp duty you’ll have to pay on a home. Link to calculator to be embed:`,
      svgIcon: ` 
  
  
  <svg viewBox="0 0 192 216" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M192 208C192 210.122 191.157 212.157 189.657 213.657C188.157 215.157 186.122 216 184 216H8C5.87827 216 3.84344 215.157 2.34315 213.657C0.842856 212.157 0 210.122 0 208C0 205.878 0.842856 203.843 2.34315 202.343C3.84344 200.843 5.87827 200 8 200H184C186.122 200 188.157 200.843 189.657 202.343C191.157 203.843 192 205.878 192 208ZM192 128V168C192 172.243 190.314 176.313 187.314 179.314C184.313 182.314 180.243 184 176 184H16C11.7565 184 7.68687 182.314 4.68629 179.314C1.68571 176.313 0 172.243 0 168V128C0 123.757 1.68571 119.687 4.68629 116.686C7.68687 113.686 11.7565 112 16 112H72.43L56.72 38.71C55.7195 34.0449 55.7749 29.2151 56.8821 24.5742C57.9893 19.9333 60.1202 15.5987 63.1189 11.8877C66.1177 8.17666 69.9083 5.18316 74.2133 3.1263C78.5183 1.06944 83.2288 0.00128084 88 3.10439e-08H104C108.772 -0.000210151 113.484 1.06686 117.79 3.12307C122.096 5.17929 125.888 8.17258 128.888 11.8838C131.888 15.595 134.02 19.9301 135.127 24.5718C136.235 29.2134 136.291 34.0441 135.29 38.71L119.57 112H176C180.243 112 184.313 113.686 187.314 116.686C190.314 119.687 192 123.757 192 128ZM88.79 112H103.21L119.64 35.35C120.139 33.0178 120.111 30.6035 119.557 28.2836C119.003 25.9638 117.937 23.7972 116.438 21.9423C114.939 20.0874 113.044 18.5911 110.892 17.5629C108.74 16.5348 106.385 16.0008 104 16H88C85.6141 15.9993 83.2582 16.5322 81.1049 17.5597C78.9516 18.5872 77.0553 20.0833 75.555 21.9384C74.0546 23.7935 72.9881 25.9606 72.4335 28.2812C71.879 30.6018 71.8505 33.017 72.35 35.35L88.79 112ZM176 168V128H16V168H176Z" fill="#61C0CD"/>
      </svg>`,
      href: "/calculator/stamp-duty-calculator",
    },
    {
      title: `Loan repayment calculator`,
      desc: `Find out how much stamp duty you’ll have to pay on a home.
      Link to calculator to be embed:`,
      svgIcon: `<svg   viewBox="0 0 414 448" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M176.794 0.00848752C172.839 -0.00551248 168.872 -0.00151251 164.894 0.0154875C145.747 0.104487 126.294 0.607487 106.675 1.33549L112.351 26.2285C132.782 23.9185 155.181 22.1985 177.578 21.3385C189.712 20.8725 201.772 20.6265 213.47 20.6885C248.565 20.8715 280.407 23.8185 301.24 31.8905L310.148 35.3445L306.171 44.0295C277.11 107.514 270.389 168.761 274.943 228.855C277.191 157.537 306.836 94.1055 345.753 12.7875C292.797 3.98749 236.119 0.205484 176.794 0.00748426V0.00848752ZM204.828 38.7985C196.088 38.8055 187.178 38.9825 178.269 39.3245C136.597 40.9245 95.07 45.8145 68.005 51.4205C98.238 107.499 122.695 163.707 138.488 218.502C140.452 218.437 142.419 218.452 144.382 218.547C148.4 218.744 152.374 219.289 156.257 220.137C140.182 168.74 121.872 121.337 99.111 74.0065L93.968 63.3125L105.654 61.2445C135.01 56.0465 165.31 54.0345 194.148 54.0255C196.07 54.0255 197.988 54.0325 199.896 54.0495C218.22 54.2095 235.88 55.1575 252.242 56.5845L263.296 57.5495L260.072 68.1665C241.372 129.729 237.709 195.844 248.282 258.748C248.458 258.911 248.636 259.073 248.808 259.238C252.621 257.902 256.188 256.54 259.513 255.084C251.259 187.69 254.916 118.161 285.742 45.8835C268.54 41.5005 242.317 39.2095 213.503 38.8495C210.611 38.8137 207.72 38.7961 204.828 38.7985ZM349.773 46.1835C318.817 111.739 296.83 164.273 293.226 220.986C313.264 154.184 351.995 94.3015 396.13 55.8285C380.81 52.0071 365.346 48.7896 349.773 46.1835ZM54.812 64.7125C36.052 68.5805 17.726 73.4905 0 80.2745C8.626 87.7545 24.22 101.669 43.14 120.163C51.848 111.2 60.729 102.345 69.992 94.2935C65.0859 84.3549 60.0252 74.4934 54.812 64.7125ZM196.835 72.1945C183.215 72.1285 169.273 72.5185 155.281 73.4875C153.813 87.1695 145.721 99.9695 136.056 112.557C151.487 149.026 164.814 186.24 176.812 225.751C195.187 231.171 213.366 237.578 228.092 245.255C222.622 202.797 223.37 159.292 230.472 116.747C217.587 103.437 210.875 88.6575 210.337 72.4075C205.837 72.2876 201.336 72.2166 196.835 72.1945ZM378.853 99.1795C354.123 128.479 332.332 165.176 317.483 205.091C344.747 166.309 378.273 136.059 413.96 114.691C402.334 109.351 390.63 104.18 378.853 99.1795ZM78.113 111.138C63.519 124.326 49.099 140.155 34.082 155.235C66.371 174.426 93.873 197.153 116.308 222.895C117.701 222.369 119.108 221.896 120.523 221.465C110.025 185.369 95.638 148.432 78.113 111.138ZM311.5 235.89C295.103 255.678 279.666 266.125 258.41 274.46C260.801 283.68 257.25 294.265 249.076 302.361C244.268 307.122 238.226 312.549 229.392 316.076C230.667 316.831 231.967 317.541 233.292 318.203C245.656 324.373 267.499 322.383 287.792 313.154C308.022 303.954 326.094 288.062 332.792 271.963C336.149 262.913 333.752 258.193 327.875 251.271C323.691 246.346 317.58 241.381 311.5 235.891V235.89ZM141.421 236.476C130.706 236.378 119.824 239.47 110.831 246.236C98.041 255.859 88.181 273.02 88.093 302.17V302.37L88.083 302.57C85.163 363.951 89.683 392.27 98.638 407.635C106.542 421.197 119.688 427.689 138.918 439.629C139.834 437.223 140.788 434.264 141.683 430.531C143.96 421.032 145.844 407.986 147.038 393.556C149.427 364.698 149.078 330.046 145.083 305.111L142.972 291.921L155.988 294.916C187.603 302.189 205.688 303.048 216.188 301.196C226.69 299.342 230.249 295.673 236.409 289.572C242.199 283.84 242.091 281.777 240.865 278.551C239.638 275.324 234.716 270.006 226.365 264.918C209.662 254.742 181.28 245.307 154.751 238.271C150.4 237.12 145.922 236.517 141.421 236.476ZM330.521 305.892C320.508 315.646 308.186 323.653 295.244 329.539C274.261 339.081 251.181 343.446 232.033 337.092C225.273 339.608 221.346 342.499 219.365 344.892C216.647 348.176 216.477 350.592 217.398 354.052C218.318 357.512 221.063 361.62 224.457 364.576C227.85 367.532 231.883 369.068 233.416 369.14C280.21 371.362 300.462 357.933 325.693 342.357C333.051 337.815 335.867 328.614 335.162 319.426C334.809 314.832 333.472 310.515 331.929 307.796C331.546 307.103 331.072 306.462 330.521 305.892ZM164.334 314.988C167.061 340.056 167.106 369.302 164.976 395.041C163.729 410.113 161.801 423.82 159.187 434.726C158.05 439.472 156.799 443.68 155.287 447.385L301.984 440.92C300.328 434.771 298.64 428.596 296.953 422.418C291.317 424.295 285.556 425.773 279.713 426.842L279.757 427.572L271.441 428.09C266.32 428.704 260.989 429.043 255.458 429.082L171.598 434.292L174.091 422.685C182.038 385.679 182.771 353.096 177.869 317.451C173.341 316.718 168.829 315.897 164.333 314.988H164.334ZM196.306 319.672C200.254 351.605 199.779 382.082 193.9 414.872L213.164 413.676C210.143 409.219 208.067 404.189 207.064 398.898C205.768 392.018 206.489 384.36 210.99 378.028C211.189 377.747 211.404 377.478 211.617 377.207C206.371 372.362 201.989 366.145 200.003 358.683C197.889 350.739 199.209 341.013 205.5 333.413C207.579 330.903 210.092 328.637 213.043 326.597C210.433 324.517 208.145 322.312 206.169 320.015C203.105 320.036 199.824 319.922 196.306 319.672ZM328.972 361.457C305.516 375.71 279.162 389.333 232.562 387.121C231.041 387.047 229.529 386.841 228.044 386.506C226.811 387.059 226.153 387.762 225.662 388.453C224.699 389.808 224.13 392.253 224.753 395.566C226.001 402.193 232.278 409.455 238.123 410.135C279.508 414.948 308.102 401.409 325.464 385.658C333.464 378.4 333.532 373.758 332.354 368.707C331.764 366.184 330.464 363.738 328.972 361.457ZM322.289 410.519C319.511 412.261 316.659 413.882 313.742 415.379C315.392 421.43 317.046 427.481 318.679 433.533L338.599 429.961C333.459 425.574 329.437 421.007 326.209 416.465C324.767 414.436 323.496 412.464 322.289 410.519Z" fill="#61C0CD"/>
      </svg>
      
      
      `,
      href: "/calculator/loan-repayment-calculator",
    },

    {
      title: `Loan comparison calculator`,
      desc: `Adjust rates and terms to compare different home loans.
      Link to calculator to be embed`,
      svgIcon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
    </svg>
    
      
      `,
      href: "/calculator/loan-comparison-calculator",
    },
    {
      title: `Income annualisation calculator`,
      desc: `Work out your annual income from the money you’ve received so far this year.`,
      svgIcon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
    
    
      
      `,
      href: "/calculator/income-annualisation-calculator",
    },
  ];

  const otherCalc = [
    {
      title: "Split Loan Calculator",
      href: "/calculator/split-loan-calculator",
    },
    {
      title: "Savings Calculator",
      href: "/calculator/saving-calculator",
    },
    {
      title: "Property Selling Cost Calculator",
      href: "/calculator/property-selling-cost-calculator",
    },
    {
      title: "Interest Only Mortgage Calculator",
      href: "/calculator/interest-only-mortgage-calculator",
    },
    {
      title: "Leasing Calculator",
      href: "/calculator/leasing-calculator",
    },
  ];
  return (
    <>
      <SimpleHero
        heading="Calculators"
        subHeading="We are more than just a broker."
      />
      <YoastNextSeo {...pageData.yoast_head_json} />
      <section className=" lg:px-40 bg-gray-bg py-16  ">
        <div className="grid lg:grid-cols-3 max-w-site-full mx-auto">
          {data.map((d) => (
            <CalculatorGrid {...d} />
          ))}
        </div>
      </section>
      <div className="">
        <section className="lg:px-40 px-4 bg-gray-bg py-16  ">
          <div className="max-w-site-full mx-auto grid lg:grid-cols-2 ">
            {otherCalc.map((t, idx) => (
              <div key={idx} className="my-4">
                <div className="flex font-isidorasans_semi_bold gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-brand-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                    />
                  </svg>
                  <Link href={t.href}>
                    {" "}
                    <span>{t.title}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

const CalculatorGrid = (props: any) => {
  return (
    <div className="  p-6  ">
      <div
        className="w-12 h-12 mb-4 text-brand-blue"
        dangerouslySetInnerHTML={{ __html: props.svgIcon }}
      ></div>
      <h5 className="font-isidorasans_semi_bold text-brand-blue text-19px mt-2 ">
        {props.title}
      </h5>
      <p className="font-isidorasans_medium my-4">{props.desc}</p>
      <Link legacyBehavior href={props.href}>
        <a className="flex transition-all hover:translate-x-3 delay-200 mb-4 hover:text-brand-blue items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-12 h-12  text-brand-blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span className=" text-brand-blue font-isidorasans_semi_bold">
            Calculate Now
          </span>
        </a>
      </Link>
    </div>
  );
};
export const getStaticProps = async () => {
  const homepage_url = process.env.NEXT_WP_API_URL + `/custom-page/115`;

  const homePageData = await fetch(homepage_url).then((r) => r.json());

  return {
    props: {
      pageData: homePageData,
    },
  };
};
