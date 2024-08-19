import { Alegreya } from 'next/font/google';
import EmailDialog from '@/components/email-dialog';

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: '700',
});

export default function Footer() {
  return (
    <div className="bg-black text-white p-20 flex flex-col gap-12">
      <p className={`text-6xl ${alegreya.className} text-center`}>
        Let us help you make magic!
      </p>

      <p className="text-center">
        Make us your conception, design and development team without breaking
        the bank
      </p>

      <div className="flex justify-center gap-10">
        <button className="bg-lime-100 text-black px-6 py-3 rounded-md">
          Give us a call
        </button>
        <EmailDialog />
      </div>
    </div>
  );
}
