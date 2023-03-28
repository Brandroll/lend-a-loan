export default function VideoHero() {
  return (
    <div className="  video-container border-b-8 border-brand-blue  ">
      <video autoPlay muted loop>
        <source
          src="https://lendaloan.au/wp-content/uploads/2022/05/melbourne-city-australia-and-yarra-river-aerial-re-2021-08-29-22-54-20-utc-1.webm"
          type="video/mp4"
        />
      </video>
      <div className="caption ">
        <div className="cp-center">
          <p className="text-3xl md:text-5xl     font-isidorasans_semi_bold text-white">
            <span className="  ">2.478</span> Billion <br /> funded so far
          </p>
        </div>
      </div>
    </div>
  );
}
