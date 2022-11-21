import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className={"title"}>
        {/* Welcome to <a href="/">About!</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Creado por <code className={"code"}>pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
