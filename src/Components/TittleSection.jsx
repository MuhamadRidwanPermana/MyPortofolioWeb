import React from "react";

export default function TittleSection({title, subtitle}) {
  return (
    <>
      <header className="grid text-center">
        <h1 className="text-3xl font-semibold text-primary">{ title }</h1>
        <p className="text-secondary font-medium text-sm">{ subtitle }</p>
      </header>
    </>
  );
}
