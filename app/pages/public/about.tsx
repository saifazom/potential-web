import { Link } from "react-router";

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg">
        Welcome to our website. We are dedicated to providing the best service
        and experience to our users.
      </p>
      <Link className="u-button" to="/">
        Go to Home
      </Link>
    </div>
  );
}
