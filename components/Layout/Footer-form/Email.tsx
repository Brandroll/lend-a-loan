export default function Email(props: any) {
  return (
    <input
      onChange={(e) => props.onChange(e.target.value)}
      value={props.value}
      className="   px-4   bg-footer text-white outline-none border-footer-link"
      placeholder="EMAIL ADDRESS"
    />
  );
}
