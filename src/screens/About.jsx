import wisuda from "../img/Wisuda.jpg";
import wisuda2 from "../img/Wisuda2.jpg";
import { useSpring, animated } from "@react-spring/web";

const About = () => {
  const spring = useSpring({
    from: { transform: "translateX(-2.5%)", opacity: 0 },
    to: { transform: "translateX(0%)", opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <>
      <div className="flex flex-col justify-center overflow-hidden">
        <div className="mx-28 py-2"></div>
        <animated.div
          className="w-fit flex items-center justify-center "
          style={spring}
        >
          <div className="z-10 w-6/12 relative p-2 max-md:w-4/5">
            <h1 className="font-serif">About</h1>
            <p className="bg-[#CACACA] text-justify relative rounded-md p-3 z-10">
              Lulusan Politeknik Negeri Samarinda jurusan Teknologi Informasi
              yang memiliki ketertarikan pada bidang Frontend Developer. Lulus
              dengan IPK 3.89. Pernah mengikuti kegiatan magang bersertifikat
              kampus merdeka sebagai Frontend Developer di PT Media Kreasi Abadi
              dan mempelajari keahlian-keahlian seperti HTML, CSS, Javascript,
              GIT, Typescript, dan React.js. Kemudian pernah mengikuti studi
              independen bersertifikat kampus merdeka di PT Hacktivate Teknologi
              Indonesia kegiatan React and React Native Basics, dan mempelajari
              tentang Fundamental React JS, mengimplementasikan user interface
              menggunakan framework, mengerti proses debuging, dan melakukan
              deployment menggunakan layanan 3rd Parties.
            </p>
            <div className="w-52 absolute -rotate-[20deg] -top-1/4 -right-1/4 max-md:w-36 max-md:-top-10 max-md:-right-10">
              <img src={wisuda} alt="" />
            </div>
            <div className="w-52 absolute  -rotate-[20deg] -bottom-1/2 -left-1/4 max-md:w-36 max-md:-bottom-1/4 max-md:-left-10">
              <img src={wisuda2} alt="" />
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default About;
