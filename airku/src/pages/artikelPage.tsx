import CardArtikel from "@/components/card/CardArtikel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { GrLinkNext } from "react-icons/gr";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import Link from "next/link";

export default function Artikel() {
  const currentPath = usePathname();
  const kategories = [
    { text: "Edukasi" },
    { text: "Berita" },
    { text: "Artikel" },
  ];
  return (
    <div className="container">
      <div className="sm:mt-[92px] h-16 sm:h-72 relative">
        <Image
          src="/assets/Hero-Artikel.png"
          alt="Hero-Artikel"
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-[22px] ml-[560px] w-[371px] h-[102px] flex-col justify-start items-center gap-[15px] inline-flex">
        <h1 className="text-neutral-600 text-4xl font-semibold">KATEGORI</h1>
        <div className="flex gap-6 items-center py-2">
          {kategories.map((kategori, index) => (
            <Link
              key={index}
              className={classnames({
                "text-greenBase border-b-2 pb-3 border-greenBase":
                  kategori.text === currentPath,
                "text-gray-400": kategori.text !== currentPath,
                "border-b-2 pb-3 hover:text-greenBase hover:border-greenBase transition-colors":
                  true,
              })}
              href={kategori.text}
            >
              {kategori.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-[98px] mx-[100px]">
        <div className="grid grid-cols-4 gap-[50px]">
          <CardArtikel
            src="/assets/gambar.png"
            time="12-12-2023"
            title="Bantuan Air Bersih"
            desc="Kekeringan merupakan suatu peristiwa yang terjadi pada musim kemarau, 
                apalagi ketika musim kemarau panjang melanda."
          />
          <CardArtikel
            src="/assets/gambar.png"
            time="12-12-2023"
            title="Bantuan Air Bersih"
            desc="Kekeringan merupakan suatu peristiwa yang terjadi pada musim kemarau, 
                apalagi ketika musim kemarau panjang melanda."
          />
          <CardArtikel
            src="/assets/gambar.png"
            time="12-12-2023"
            title="Bantuan Air Bersih"
            desc="Kekeringan merupakan suatu peristiwa yang terjadi pada musim kemarau, 
                apalagi ketika musim kemarau panjang melanda."
          />
          <CardArtikel
            src="/assets/gambar.png"
            time="12-12-2023"
            title="Bantuan Air Bersih"
            desc="Kekeringan merupakan suatu peristiwa yang terjadi pada musim kemarau, 
                apalagi ketika musim kemarau panjang melanda."
          />
          <CardArtikel
            src="/assets/gambar.png"
            time="12-12-2023"
            title="Bantuan Air Bersih"
            desc="Kekeringan merupakan suatu peristiwa yang terjadi pada musim kemarau, 
                apalagi ketika musim kemarau panjang melanda."
          />
          <CardArtikel
            src="/assets/gambar.png"
            time="12-12-2023"
            title="Bantuan Air Bersih"
            desc="Kekeringan merupakan suatu peristiwa yang terjadi pada musim kemarau, 
                apalagi ketika musim kemarau panjang melanda."
          />
          <CardArtikel
            src="/assets/gambar.png"
            time="12-12-2023"
            title="Bantuan Air Bersih"
            desc="Kekeringan merupakan suatu peristiwa yang terjadi pada musim kemarau, 
                apalagi ketika musim kemarau panjang melanda."
          />
          <CardArtikel
            src="/assets/gambar.png"
            time="12-12-2023"
            title="Bantuan Air Bersih"
            desc="Kekeringan merupakan suatu peristiwa yang terjadi pada musim kemarau, 
                apalagi ketika musim kemarau panjang melanda."
          />
        </div>
        <div className="flex justify-center mt-[50px]">
          <button
            type="button"
            className="flex items-center border-2 border-greenBase font-semibold rounded-lg py-[8px] px-[12px] text-[14px] text-greenBase hover:translate-x-1 transition-all"
          >
            Selengkapnya
            <div className="ml-[6px]">
              <GrLinkNext />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
