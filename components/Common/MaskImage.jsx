export default function MaskImage({ url }) {
  return (
    <div className="box group">
      <img src="/img.png" className="main " />
      <img src="/after.png" className="firstlayer  group-hover:animate-pulse" />
      <figure>
        <img src="/before.png" className="before " />
      </figure>
    </div>
  );
}
