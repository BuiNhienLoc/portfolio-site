export default function Education() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Add project cards here */}
        <div className="bg-white p-4 rounded shadow">Thang Long Highschool for the gifted</div>
        <div className="bg-white p-4 rounded shadow">Vietnamese-German University</div>
        <div className="bg-white p-4 rounded shadow">Oregon State University</div>
      </div>
    </section>
  );
}