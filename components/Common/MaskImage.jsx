export default function MaskImage({ src }) {
  
  return (
    <>
      <div className="box group">
        <div className="w-[85%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="none"
            viewBox="0 0 171 151"
          >
            <mask
              id="a"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              maskType="alpha"
            >
              <path
                fill="#D9D9D9"
                fillRule="evenodd"
                stroke="#000"
                d="m2.05 79.23 38.37 66.45a7.86 7.86 0 0 0 6.8 3.92h76.73c2.8 0 5.4-1.5 6.8-3.92l38.36-66.45a7.86 7.86 0 0 0 0-7.86L130.75 4.94a7.84 7.84 0 0 0-6.8-3.93H47.22c-2.8 0-5.4 1.5-6.8 3.93L2.05 71.38a7.85 7.85 0 0 0 0 7.85Z"
                clipRule="evenodd"
              />
            </mask>
            <g mask="url(#a)">
              <path fill="url(#b)" d="M1-11h169v172H1z" />
            </g>
            <defs>
              <pattern
                id="b"
                width="1"
                height="1"
                patternContentUnits="objectBoundingBox"
              >
                <use
                  xlinkHref="#c"
                  transform="scale(0.000544835 0.000535332)"
                />
              </pattern>
              <image xlinkHref={src} id="c" width="1836" height="1868" />
            </defs>
          </svg>
        </div>

        <img
          src="/after.png"
          className="firstlayer  group-hover:animate-pulse  "
        />
        <figure>
          <img src="/before.png" className="before " />
        </figure>
      </div>
    </>
  );
}
