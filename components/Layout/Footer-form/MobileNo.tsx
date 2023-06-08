import React from "react";

export default function MobileNo(props: any) {
  return (
    <>
      <input
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        className="   px-4   bg-footer text-white outline-none border-footer-link"
        placeholder="LAST NAME"
      />
    </>
  );
}
