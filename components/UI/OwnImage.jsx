import Image from 'next/image'
import React from 'react'

const OwnImage = ({linkForDT, linkForMB, id}) => {
     console.log("🚀 ~ file: OwnImage.jsx:5 ~ OwnImage ~ linkForMB:", linkForMB)
     return (
          <>
               <Image
                    className={`hidden lg:block ${id%2 !== 0 && 'scale-x-[-1]'}`}
                    src={linkForDT}
                    alt=""
                    width={1000}
                    height={900}
               />
                <Image
                    className="lg:hidden w-full"
                    src={linkForMB}
                    alt=""
                    width={400}
                    height={300}
               />
          </>
     )
}

export default OwnImage