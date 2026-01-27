export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
