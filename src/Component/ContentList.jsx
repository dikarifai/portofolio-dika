const ContentList = ({ title, company, date, jobDesc }) => {
  return (
    <div className="flex flex-col  bg-white w-11/12 py-2 px-4 rounded-2xl gap-2">
      <div className="flex w-full flex-row max-md:flex-col justify-between ">
        <div className="">
          <p className="font-semibold">{title}</p>
          <p className="text-[#B1B1B1]">{company}</p>
        </div>
        <p className="text-[#B1B1B1]">{date}</p>
      </div>
      <div>
        <ul className="list-disc pl-4 text-sm flex flex-col gap-2">
          {jobDesc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentList;
