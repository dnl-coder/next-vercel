import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className={"title"}>
        {/* Welcome to <a href="/">About!</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Creado por <code className={"code"}>pages/pricing.js</code>
      </p>
    </MainLayout>
  );
}
