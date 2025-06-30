export default function Projects() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Add project cards here */}
        <div className="bg-white p-4 rounded shadow">Project 1</div>
        <div className="bg-white p-4 rounded shadow">Project 2</div>
      </div>
    </section>
  );
}