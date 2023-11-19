import CardArtikel from "@/components/card/CardArtikel";
import CardInfo from "@/components/card/CardInfo";
import Image from "next/image";
import Link from "next/link";
import { SlCursor } from "react-icons/sl";
import { RiHandCoinFill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { PiWarningOctagonFill } from "react-icons/pi";
import Artikel from "@/components/data/ArtikelHome.json";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 mt-[98px]">
      {/* --1--- */}
      <div
        className="h-[720px] bg-cover bg-center flex justify-center "
        style={{ backgroundImage: "url('/assets/bg1.jpg')" }}
      >
        <div className="h-[253px] w-[1240px] flex justify-between mt-[60px]">
          <div className="w-[651px] ">
            <h1 className="text-white text-5xl font-bold ">
              BERBAGI AIR <br /> UNTUK MEMBANGUN <br /> MASA DEPAN
            </h1>
            <h2 className="mt-[25px] text-white">
              Bersama-sama, kita dapat mengatasi krisis air global dan
              memberikan <br /> masa depan yang lebih baik bagi generasi
              mendatang. <br />
              Mari bergabung dan berdonasi sekarang!
            </h2>
            <div className="flex gap-[9px] mt-[48px] ">
              <Link
                href={""}
                className="rounded-lg bg-teal-600 pt-[9.5px] pb-[9.5px] pr-[22.5px] pl-[22.5px] text-white"
              >
                Donasi Sekarang{" "}
              </Link>
              <Link
                href={""}
                className=" flex items-center gap-2 border-2 border-teal-600 text-teal-600 rounded-lg pt-[9.5px] pb-[9.5px] pr-[22.5px] pl-[22.5px]"
              >
                Getting Started <SlCursor />
              </Link>
            </div>
            <div className="flex gap-[9px] mt-[49.5px] text-white">
              <h1>Rp.28.525.000,-</h1>
              <h2>Donasi Terkumpul</h2>
            </div>
          </div>
          <div className="w-[552px] relative">
            <div className="h-[417px] w-[299px] absolute z-10 top-0 right-0">
              <Image src="/assets/hero3.png" alt="" fill />
            </div>
            <div className="h-[315px] w-[284px] absolute z-30 right-[268px]">
              <Image src="/assets/hero2.png" alt="" fill />
            </div>
            <div className="h-[257px] w-[226px] absolute z-20 top-[277px] right-[215px]">
              <Image src="/assets/hero1.png" alt="" fill />
            </div>
          </div>
        </div>
      </div>
      {/* --2-- */}
      <div className="mt-[100px] flex gap-[63px] h-[438px] w-[1240px] m-auto">
        <div className=" w-[580px] h-[435px] rounded-lg relative">
          <Image
            src="/assets/hero4.png"
            alt=""
            fill
            className="w-[580px] h-[435px]"
          />
        </div>
        <div>
          <h1 className="text-teal-600 flex font-bold">About us</h1>
          <h2 className="text-3xl font-bold mb-[16px] mt-[8px]">
            Hanya dengan Saling Membantu Satu Sama Lain Kita Dapat Membuat Dunia
            Menjadi Lebih Baik
          </h2>
          <p>
            Dengan setiap donasi yang Anda berikan, anda turut berperan dalam
            mengubah kehidupan ribuan orang dengan memberikan akses air bersih
            yang layak.
          </p>
          <div className="mt-[24px] flex flex-col gap-3">
            <div className="flex gap-[16px]">
              <div className="text-teal-600 pt-2">
                {" "}
                <RiHandCoinFill />{" "}
              </div>
              <h1>
                Dengan setiap donasi yang Anda berikan, anda turut berperan
                dalam mengubah kehidupan ribuan orang dengan memberikan akses
                air bersih yang layak
              </h1>
            </div>
            <div className="flex gap-[16px]">
              <div className="text-teal-600 pt-2">
                <GiWallet />
              </div>
              <h1>
                Setiap donasi yang diterima akan digunakan secara efisien dan
                transparan untuk membangun infrastruktur air yang berkelanjutan.
              </h1>
            </div>
            <div className="flex gap-[16px]">
              <div className="text-teal-600 pt-2">
                <PiWarningOctagonFill />
              </div>
              <h1>
                Tersedia fitur pelaporan bagi anda yang ingin melaporkan
                permasalahan infrastruktur air yang terjadi di wilayah anda
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* --3-- */}
      <div
        className="h-[720px] bg-cover bg-center mt-[100px] flex flex-col justify-center items-center "
        style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
      >
        <div className="flex justify-center gap-5 items-center">
          <CardInfo
            src={"/assets/people.png"}
            angka={"20 Orang"}
            title={"Total Pendonasi"}
          />
          <CardInfo
            src={"/assets/wallet.png"}
            angka={"Rp.28.525.000.-"}
            title={"Total Donasi"}
          />
          <CardInfo
            src={"/assets/map.png"}
            angka={"8 Wilayah"}
            title={"Tujuan Donasi"}
          />
        </div>
        <h1 className="mt-12 mb-2 flex w-2/3 justify-start text-white">
          Total Donasi
        </h1>
        <div className="h-4 relative overflow-hidden w-2/3 rounded-full ">
          <div className="w-full h-full bg-gray-200 absolute"></div>
          <div className="h-full w-[65%] bg-teal-600 absolute"></div>
        </div>
        <div className="h-6 relative overflow-hidden w-2/3 rounded-full ">
          <div className="h-full w-[67%] flex justify-end text-white">65%</div>
        </div>
      </div>
      {/* --4-- */}
      <div>
        <div className="w-[1240px] h-[628px] m-auto mt-[100px] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">
            Bagaimana Cara Berdonasi di Web Kami ?
          </h1>
          <div className="gap-[40px] mt-[45px] flex">
            <div className="w-[650px] h-[540px] relative">
              <Image src={"/assets/cara-berdonasi.jpg"} alt="" fill />
            </div>
            <div className="h-[550px] w-[550px] relative">
              <Image src={"/assets/hero5.png"} alt="" fill />
            </div>
          </div>
        </div>
      </div>
      {/* --5-- */}
      <div className="bg-[#23272e] mt-[100px] h-[600px] px-[100px] pb-[120px]">
        <h1 className="mt-[47px] text-white text-6xl font-bold">
          Artikel Dan Berita Terkini
        </h1>
        <div className=" flex justify-between items-center mt-[30px]">
          {Artikel.map((item, index) => (
            <CardArtikel
              src={item.src}
              title={item.title}
              desc={item.desc}
              time={item.time}
              key={index}
            />
          ))}
        </div>
      </div>
      {/* --6-- */}
      <div className="h-[222px] relative flex justify-center">
        <div className="h-[178px] w-[1024px] bg-teal-600 absolute -bottom-[55px] rounded-lg shadow-xl flex items-center justify-between px-[50px]">
          <h1 className="font-bold text-5xl text-gray-100 border-r-4 border-gray-400 pr-5">
            MORE PEOPLE <br /> MORE IMPACT
          </h1>
          <p className="">
            Kita tidak bisa membantu semua orang. <br /> tetapi setiap orang
            dapat membantu seseorang.
          </p>
          <div>
            <Link
              href={"#"}
              className="px-[18.5px] py-[10px] bg-white text-teal-600 rounded-lg"
            >
              Berdonasi Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
