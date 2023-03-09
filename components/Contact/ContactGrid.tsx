import Image from "next/image";

export default function ContactGrid(props: any) {
  return (
    <div className=" grid md:grid-cols-3">
      {props.contact_address.map((addr: any) => (
        <div key={Math.random()}>
          <div>
            <Image height={400} alt="" src={addr.img} width={350} />
          </div>
          <div className="py-8">
            <div>
              <p className="text-24px font-isidorasans_semi_bold">
                {addr.location_title}
              </p>
              <p className="text-18px font-isidorasans_regular">
                {addr.location_street_address}
              </p>
              <p className="text-18px font-isidorasans_regular">
                {addr.location_suburb_state_and_postcode}
              </p>
            </div>
            <div className="text-15px mt-8 font-isidorasans_regular">
              <p>
                <a
                  className="hover:text-brand-blue"
                  href={`tel:${addr.location_phone}`}
                >
                  T. {addr.location_phone}
                </a>
              </p>
              <p>
                <a
                  className="hover:text-brand-blue"
                  href={`mailto:${addr.location_email}`}
                >
                  E. {addr.location_email}
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
