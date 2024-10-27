import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Viera Tito Virgiawan - Portofolio" },
    { name: "description", content: "Welcome to My Portofolio!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
    </>
  );
}
