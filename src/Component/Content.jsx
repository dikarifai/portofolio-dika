const Content = (props) => {
  return (
    <div className="w-full bg-slate-200 flex items-center h-screen overflow-auto p-8">
      {props.children}
    </div>
  );
};

export default Content;
