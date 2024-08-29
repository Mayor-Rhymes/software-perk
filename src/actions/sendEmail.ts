'use server';

import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formdata: FormData) => {
  const senderEmail = formdata.get('senderEmail');
  const message = formdata.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;

  try {
    data = await resend.emails.send(
      {
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['ogberagabriel234@gmail.com'],
        subject: 'Message from Contact Form',
        replyTo: senderEmail,
        react: React.createElement(ContactFormEmail, {
          name: formdata.get('name') as string,
          message: message,
          senderEmail: senderEmail,
        }),
      },
    );
    return {
      data: data,
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

};
