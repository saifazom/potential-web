import { Link } from "react-router";

export default function Blog() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-lg">
        Welcome to our website. We are dedicated to providing the best service
        and experience to our users.
      </p>
      <Link className="u-button" to="/about">
        Go to About
      </Link>
    </div>
  );
}
