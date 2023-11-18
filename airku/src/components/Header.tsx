import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { BiLogIn } from "react-icons/bi";

const menus = [
  { link: "/", text: "Home" },
  { link: "/profilePage", text: "Profile" },
  { link: "/artikelPage", text: "Artikel" },
  { link: "/laporPage", text: "Lapor" },
  { link: "/donasiPage", text: "Donasi" },
];

export default function Header() {
  const currentPath = usePathname();
  return (
    <div className="w-full h-[98px] fixed top-0 bg-background z-10 shadow-md shadow-black">
      <div className="flex justify-between items-center mt-[23px]">
        <div className="ml-[100px] justify-center items-center gap-[17px] inline-flex">
          <Link href="/" className="flex gap-2">
            <Image
              alt="logo"
              className="w-[50px] h-[52px]"
              src="/assets/airku.png"
              width={100}
              height={100}
            />
            <div className="text-neutral-300 text-[32px] font-medium">
              airku
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-[50px] text-neutral-200 justify-start mr-[100px]">
          {menus.map((menu, index) => (
            <ul key={index}>
              <li className="text-lg leading-[25.20px]">
                <Link
                  className={classnames({
                    "text-greenBase border-b-2 pb-3 border-greenBase":
                      menu.link === currentPath,
                    "text-neutral-100": menu.link !== currentPath,
                    "hover:text-greenBase transition-colors": true,
                  })}
                  href={menu.link}
                >
                  {menu.text}
                </Link>
              </li>
            </ul>
          ))}
          <div className="flex items-center gap-2 bg-greenBase px-3 py-3 text-lg rounded-lg text-white font-medium hover:translate-x-1 transition-all">
            <BiLogIn />
            <Link href="/donasi">Donasi Sekarang</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
