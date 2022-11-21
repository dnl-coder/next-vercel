import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={"title"}>
        {/* Welcome to <a href="/">About!</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Creado por <code className={"code"}>pages/about.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
