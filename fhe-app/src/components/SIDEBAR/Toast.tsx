// Toast.tsx
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message: string) => {
  toast(message, {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 5000,
  });
};

const Toast: React.FC = () => {
  return <ToastContainer />;
};

export default Toast;
