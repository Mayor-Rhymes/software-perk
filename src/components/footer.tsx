import EmailDialog from '@/components/email-dialog';


export default function Footer() {
  return (
    <div className="bg-black text-white p-20 flex flex-col gap-12">
      <p className="text-3xl lg:text-6xl font-alegreya text-center">
        Let us help you make magic!
      </p>

      <p className="text-center">
        Make us your conception, design and development team without breaking
        the bank
      </p>

      <div className="flex flex-col lg:flex-row justify-center gap-10">
        <button className="bg-lime-100 text-black px-6 py-3 rounded-md">
          Give us a call
        </button>
        <EmailDialog />
      </div>
    </div>
  );
}
