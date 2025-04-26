import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg">
        Welcome to our website. We are dedicated to providing the best service
        and experience to our users.
      </p>
      <button
        className="u-button"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
}
