"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { MdCheckCircleOutline } from "react-icons/md";

interface SuccessModalContextType {
  showSuccess: (message: string) => void;
  hideSuccess: () => void;
}

const SuccessModalContext = createContext<SuccessModalContextType | undefined>(
  undefined
);

export const useSuccessModal = () => {
  const context = useContext(SuccessModalContext);
  if (!context)
    throw new Error(
      "useSuccessModal deve ser usado dentro do SuccessModalProvider"
    );
  return context;
};

const SuccessModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showSuccess = (msg: string) => {
    setMessage(msg);
    setOpen(true);
  };
  const hideSuccess = () => setOpen(false);

  return (
    <SuccessModalContext.Provider value={{ showSuccess, hideSuccess }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-8 flex flex-col items-center gap-4 max-w-xs">
            <MdCheckCircleOutline className="text-green-500 text-5xl" />
            <div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 text-center">
              {message}
            </div>
            <button
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              onClick={hideSuccess}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </SuccessModalContext.Provider>
  );
};

export default SuccessModalProvider;
 