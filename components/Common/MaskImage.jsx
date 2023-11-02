export default function MaskImage({ url }) {
  return (
    <div className="box group">
      <img src="/img.png" className="main w-full md:w-[85%] " />
      <img src="/after.png" className="firstlayer  group-hover:animate-pulse hidden md:block" />
      <figure>
        <img src="/before.png" className="before hidden md:block" />
      </figure>
    </div>
  );
}
