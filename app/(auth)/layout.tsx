import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      {children}
    </main>
  );
};

export default AuthLayout;