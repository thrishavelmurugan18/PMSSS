export function Progress({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded">
      <div
        className="bg-purple-600 h-2 rounded"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
