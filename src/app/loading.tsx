export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
      <div className="w-16 h-16 border-4 border-lime-100 border-t-lime-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-xl font-alegreya text-black">Loading...</p>
    </div>
  );
}
