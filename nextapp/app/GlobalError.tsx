"use client";

import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An Error Occured",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button title="Simulate an Error" onClick={() => setError(true)}>
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <div>
        <ErrorSimulator message="Error in Layout" />
      </div>
      {children}
    </div>
  );
};
