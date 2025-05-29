export function Card({ children, ...props }) {
  return <div className="rounded-2xl shadow-md bg-white p-4" {...props}>{children}</div>;
}

export function CardContent({ children, ...props }) {
  return <div className="text-base" {...props}>{children}</div>;
}