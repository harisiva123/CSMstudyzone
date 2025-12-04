export default function PageFooterBlock() {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 bg-gray-50 rounded-lg p-6">
      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-semibold">🔹 Author:</span> Dr. J. Siva Ramakrishna
        </p>
        <p>
          <span className="font-semibold">🔹 Institution:</span> Narayana Engineering College, Gudur
        </p>
        <p>
          <span className="font-semibold">🔹 Last Updated:</span> {currentDate}
        </p>
      </div>
    </div>
  );
}

