export default function JobInput() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Analyze a Job Description</h2>
      <textarea className="w-full p-4 border rounded" rows={6} placeholder="Paste job description here..." />
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Analyze</button>
    </section>
  );
}