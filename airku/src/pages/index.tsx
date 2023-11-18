import CardArtikel from "@/components/card/CardArtikel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { BiLogInCircle } from "react-icons/bi";

const menus = [
  { link: "/", text: "Home" },
  { link: "/profile", text: "Profile" },
  { link: "/artikel", text: "Artikel" },
  { link: "/lapor", text: "Lapor" },
  { link: "/donasi", text: "Donasi" },
];

export default function Home() {
  return (
    <div className="bg-yellow-400 mt-[300px]">
      <div>
        <p>helllo</p>
      </div>
    </div>
  );
}
