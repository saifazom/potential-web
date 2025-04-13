import { Outlet } from "react-router";
import Header from "~/components/layout/header";
import Footer from "~/components/layout/footer";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto flex min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
