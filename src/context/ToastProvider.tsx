import { ToastContainer } from 'react-toastify';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  const contextClass = {
    success: 'bg-dark',
    error: 'bg-dark',
    info: 'bg-dark',
    warning: 'bg-dark',
    default: 'bg-dark',
    dark: 'bg-dark ',
  };

  return (
    <>
      <ToastContainer
        toastClassName={context =>
          `${
            contextClass[context?.type || 'default']
          } relative flex flex-row p-4 min-h-12 rounded-md justify-between overflow-hidden cursor-pointer`
        }
        bodyClassName={() => 'text-sm text-white font-med block p-3'}
        position="bottom-left"
        autoClose={3000}
        icon={false}
      />
      {children}
    </>
  );
};

export default ToastProvider;
