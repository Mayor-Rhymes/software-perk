import React from 'react'
import { Send } from 'lucide-react';
import { useFormStatus } from "react-dom";

interface SubmitBtnProps {
  className?: string;
}

export default function SubmitBtn({ className = '' }: SubmitBtnProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`group flex items-center justify-center gap-2 h-[3rem] text-white bg-gray-900 rounded-full outline-none transition-all focus:scale-110 hover:bg-gray-800 ${className}`}
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Send{" "}
          <Send className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{" "}
        </>
      )}
    </button>
  )
}
