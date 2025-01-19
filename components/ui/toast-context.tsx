"use client";

import React, { createContext, useContext, useState } from 'react';

interface Toast {
  id: number;
  title: string;
  description: string;
}

interface ToastContextType {
  toast: (props: { title: string; description: string }) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = ({ title, description }: { title: string; description: string }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-white rounded-lg shadow-lg p-4 min-w-[300px] border border-gray-200 animate-in slide-in-from-right"
          >
            <h4 className="font-semibold text-sm">{toast.title}</h4>
            <p className="text-sm text-gray-600">{toast.description}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}