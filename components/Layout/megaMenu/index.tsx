import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MegaMenu = ({setMegaMenu}:any) => {
     return (
          <>
               <section className=''>
                    <nav id="megamenu" className="border-b pt-4 z-50 fixed top-[60px] right-0 left-0 bg-white border-gray-100 lg:shadow-xl">
                         <div className='border-t-[1px] border-gray-100'/>
                         <div
                              className="grid py-10 px-4 mx-auto max-w-screen-xl text-gray-800 md:grid-cols-3 lg:grid-cols-4 md:px-6">
                              {
                                   MenuItems?.map((item, idx) => (
                                        <ul className="col-span-2 md:col-span-1" key={idx}>
                                             {
                                                  item.column.map((l, i) => (
                                                       <li key={i} onClick={()=>setMegaMenu(false)} >
                                                            <Link href={'/'+l.href} className="flex p-3 rounded-lg hover:bg-[#61C0CD] hover:text-white">
                                                                 <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                                                      xmlns="http://www.w3.org/2000/svg">
                                                                      <path fill-rule="evenodd"
                                                                           d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                           clip-rule="evenodd"></path>
                                                                 </svg>
                                                                 <div>
                                                                      <div className={`${l.bold ? 'font-semibold' : 'font-isidorasans_regular'}`}>{l.label}</div>
                                                                      
                                                                 </div>
                                                            </Link>
                                                       </li>
                                                  ))
                                             }

                                        </ul>
                                   ))
                              }
                              <div className='relative hidden lg:block'>
                                   <Image src={`/imgs/businessman-corporate-valuation-advisors-cva-10.png`} className='absolute -bottom-10 right-0' alt="img" width={200} height={400}/>
                              </div>
                         </div>
                    </nav>
               </section>
          </>
     )
}

export default MegaMenu



export const MenuItems = [
     {
          column: [
               {
                    label: 'Residential Lending',
                    href: "home-loans",
                    bold: true
               },
               {
                    label: 'First Home Buyer',
                    href: "first-home-buyer"
               },
               {
                    label: 'Home Loan Refinance',
                    href: "refinancing"
               },
               {
                    label: 'Investment Loans',
                    href: "investment-loans"
               },
               {
                    label: 'Construction Loans',
                    href: "construction-loans"
               },
               {
                    label: 'Moving Home Loans',
                    href: "moving-home-loan"
               }
          ]
     },
     {
          column: [
               {
                    label: 'Business Lending',
                    href: "business-loans",
                    bold: true
               },
               {
                    label: 'Commercial Property Loan',
                    href: "commercial-loans"
               },
               {
                    label: 'Equipment and Asset Finance',
                    href: "asset-finance"
               },
               {
                    label: 'Development Loans',
                    href: "development-loans"
               },
               {
                    label: 'Unsecured Business Loans',
                    href: "unsecured-business-loans"
               },
               {
                    label: 'Private Lending',
                    href: "private-lending"
               }
          ]
     },
     {
          column: [
               {
                    label: 'Consumer Lending',
                    href: "personal-loans",
                    bold: true
               },
               {
                    label: 'Car Loans',
                    href: "car-loans"
               },
               {
                    label: 'Renovation Loans',
                    href: "renovation-loans"
               },
               {
                    label: 'Debt Consolidation',
                    href: "debt-consolidation"
               },
               {
                    label: 'Leisure Finance',
                    href: "leisure-finance"
               },
               {
                    label: 'Medical',
                    href: "medical-loans"
               }
          ]
     }
]