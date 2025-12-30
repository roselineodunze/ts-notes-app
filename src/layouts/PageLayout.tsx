import { ReactNode } from "react";
import NavBar from "../components/NavBar";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className="h-screen flex flex-col">
      <section>
        <NavBar/>
      </section>
      <section className="flex-1">{children}</section>
    </main>
  );
};

export default PageLayout;
