import CardName from "@/components/card/CardName";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import TeamData from "@/components/data/TeamData.json";
import Footer from "@/components/Footer";

export default function Profile() {
  return (
    <div className="container">
      <div className="sm:mt-[92px] h-16 sm:h-72 relative">
        <Image
          src="/assets/Hero-profile.png"
          alt="Hero-Profile"
          fill
          className="object-cover"
        />
      </div>
      <div className="container flex gap-10 justify-between mt-11 px-[100px]">
        <div className="flex-1">
          <Image
            src="/assets/about-us.png"
            alt="hero"
            width={1000}
            height={1000}
            className="w-[580px] h-[580px]"
          />
        </div>
        <div className="flex-1 ">
          <div className="mb-2">
            <h2 className=" text-greenBase text-[40px] font-bold">Visi</h2>
            <p className="font-medium mt-2  text-neutral-800">
              Menjadi sumber inspirasi dan kekuatan kolaboratif untuk mengatasi
              krisis air bersih global dengan memobilisasi donasi, membangun
              kesadaran, dan memungkinkan tindakan nyata menuju akses air bersih
              yang berkelanjutan bagi semua.
            </p>
          </div>
          <div className="mt-8 ">
            <h2 className="text-greenBase text-[40px] font-bold">Misi</h2>
            <span className="font-bold leading-10 text-neutral-950">
              Menyediakan Akses Informasi yang Komprehensif
            </span>
            <p className=" text-neutral-800">
              Menyediakan sumber daya informatif, penelitian, dan berita terkini
              tentang isu-isu air bersih untuk meningkatkan pemahaman
              masyarakat.
            </p>
            <span className="font-bold leading-10 text-neutral-950">
              Memobilisasi Donasi
            </span>
            <p className="text-neutral-800">
              Mengintegrasikan fitur donasi yang mudah digunakan untuk
              mengumpulkan dana yang diperlukan untuk proyek-proyek air bersih
              yang bermanfaat.
            </p>
            <span className="font-bold leading-10 text-neutral-950">
              Mengedukasi dan Mendorong Tindakan
            </span>
            <p className="text-neutral-800">
              Memberikan panduan praktis, sumber daya, dan petunjuk bagi
              individu, kelompok, dan organisasi yang ingin berkontribusi Donasi
              air.
            </p>
            <span className="font-bold leading-10 text-neutral-950">
              Transparansi dan Akuntabilitas
            </span>
            <p className="text-neutral-800">
              Menyediakan laporan keuangan terbuka dan berkelanjutan untuk
              memastikan bahwa setiap donasi digunakan secara efisien dan
              transparan.
            </p>
          </div>
        </div>
      </div>
      <div className=" container mt-24">
        <h1 className="flex justify-center text-greenBase font-bold text-[40px] ">
          TIM KAMI
        </h1>
        <div className="mt-4 relative">
          <Image
            src="/assets/frame.png"
            alt="Frame"
            width={500}
            height={500}
            className="h-[672px] w-full"
          />
          <div className="container px-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-wrap justify-center gap-12">
              {TeamData.map((data, index) => (
                <CardName
                  key={index}
                  nama={data.nama}
                  role={data.jobdesk}
                  desc={data.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
