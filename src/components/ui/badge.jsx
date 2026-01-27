export function Badge({ children, className = "" }) {
  return (
    <span className={`px-2 py-1 text-xs rounded bg-gray-200 ${className}`}>
      {children}
    </span>
  );
}
