'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SubmitBtn from './submit-btn';
import { sendEmail } from '@/actions/sendEmail'; // Import the sendEmail function
import { toast } from 'sonner'; // Import toast for notifications
import { Button } from './ui/button';
import { Send } from 'lucide-react';

export default function EmailDialog() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true); // Set pending to true when submitting

    const formData = new FormData();
    formData.append('name', name);
    formData.append('senderEmail', email);
    formData.append('message', message);

    try {
      await sendEmail(formData); // Pass FormData instead
      toast.success('Email sent successfully!'); // Show success message
    } catch (error) {
      toast.error('Failed to send email. Please try again.'); // Show error message
    } finally {
      setPending(false); // Reset pending state
    }

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-lime-100 text-black px-6 py-3 rounded-md">
          Send an email
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Contact Us</DialogTitle>
          <DialogDescription>
            Send us an email and we will get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
          </div>
          <Button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] text-white bg-gray-900 rounded-full outline-none transition-all focus:scale-110 hover:bg-gray-800"
            disabled={pending}
          >
            {pending ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>
                Send{' '}
                <Send className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
