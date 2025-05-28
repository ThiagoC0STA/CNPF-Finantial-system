"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { MdErrorOutline } from "react-icons/md";

interface ErrorModalContextType {
  showError: (message: string) => void;
  hideError: () => void;
}

const ErrorModalContext = createContext<ErrorModalContextType | undefined>(
  undefined
);

export const useErrorModal = () => {
  const context = useContext(ErrorModalContext);
  if (!context)
    throw new Error(
      "useErrorModal deve ser usado dentro do ErrorModalProvider"
    );
  return context;
};

const ErrorModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showError = (msg: string) => {
    setMessage(msg);
    setOpen(true);
  };
  const hideError = () => setOpen(false);

  return (
    <ErrorModalContext.Provider value={{ showError, hideError }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-8 flex flex-col items-center gap-4 max-w-xs">
            <MdErrorOutline className="text-red-500 text-5xl" />
            <div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 text-center">
              {message}
            </div>
            <button
              className="mt-2 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-600 transition cursor-pointer"
              onClick={hideError}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </ErrorModalContext.Provider>
  );
};

export default ErrorModalProvider;
