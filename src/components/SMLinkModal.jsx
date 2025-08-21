import { FaLink } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";
import { useRef } from "react";

const SMLinkModal = ({ selectLink, onClose }) => {
  const refModal = useRef();

  const closeModal = (e) => {
    if (refModal.current === e.target) {
      onClose();
    }
  };

  return (
    <motion.div
      ref={refModal}
      onClick={closeModal}
      className="w-full h-full fixed inset-0 dark:bg-black bg-white flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative dark:bg-white bg-neutral-500 text-white dark:text-black w-60 h-40 
        flex flex-col justify-center items-center rounded-2xl"
      >
        <div className="absolute top-2 right-3" onClick={onClose}>
          <IoMdClose className="text-xl cursor-pointer" />
        </div>
        <ul className="flex flex-col gap-2">
          {selectLink.map((item, index) => {
            return (
              <li
                key={index}
                className="flex flex-col justify-center text-lg h-12 w-50 rounded-2xl
                 dark:hover:bg-black dark:hover:text-white duration-300 
                 hover:bg-gray-300 hover:text-black"
              >
                <a
                  href={item.url}
                  target="_blink"
                  className="flex flex-row gap-5 items-center ml-5"
                >
                  <FaLink className="sm" />
                  {item.userName}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default SMLinkModal;
