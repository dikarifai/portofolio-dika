import wisuda from "../img/Wisuda.jpg";
import wisuda2 from "../img/Wisuda2.jpg";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="mx-28 py-2">
          <h1 className="font-serif">About</h1>
        </div>
        <div className="mx-44 w-6/12 relative">
          <div className="z-10 relative bg-[#CACACA] text-justify rounded-md p-2">
            <p>
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
          </div>
          <div className="w-52 absolute -top-28 -right-44 -rotate-[20deg] grayscale hover:grayscale-0 ">
            <img src={wisuda} alt="" />
          </div>
          <div className="w-52 absolute -bottom-28 -left-44 -rotate-[20deg] grayscale hover:grayscale-0 ">
            <img src={wisuda2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
