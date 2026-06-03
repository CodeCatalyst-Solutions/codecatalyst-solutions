import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl">404</h1>
      <Link to="/" className="text-brand-gold mt-4">
        Go Home
      </Link>
    </div>
  );
}