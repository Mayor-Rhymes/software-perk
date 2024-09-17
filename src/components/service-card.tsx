export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-6 bg-black text-white rounded-xl p-10 hover:shadow-lg transition-shadow">
      <h2 className="font-alegreya text-xl mb-3">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
}
