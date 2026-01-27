export function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="border-b p-4">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="font-bold text-lg">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
