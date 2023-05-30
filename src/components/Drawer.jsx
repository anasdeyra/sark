import { FiX } from "react-icons/fi";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-[98%] inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <FiX
        onClick={() => {
          setIsOpen(false);
        }}
        color="white"
        size={24}
        className="absolute right-0 m-5 z-20"
      />
      <section
        className={
          "w-[80vw] max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        {children}
      </section>
    </main>
  );
}
