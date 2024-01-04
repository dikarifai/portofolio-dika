const Modal = ({ show, setShow, children }) => {
  return (
    <div
      className={`${
        show ? "" : "hidden"
      } flex justify-center h-screen w-screen bg-black bg-opacity-75 fixed top-0 left-0 z-50`}
      onClick={() => setShow((prev) => !prev)}
    >
      {children}
    </div>
  );
};

export default Modal;
