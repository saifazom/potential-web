import { Outlet } from "react-router";
import Header from "~/components/layout/header";
import Footer from "~/components/layout/footer";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
