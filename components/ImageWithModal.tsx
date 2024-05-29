import React, { useState } from "react";
import Image from "next/image";
interface ImgModalProps {
  src: string;
  alt: string;
}

const ImgModal: React.FC<ImgModalProps> = ({ src, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center m-4">
        <div>
          <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            className="object-cover cursor-pointer"
            onClick={openModal}
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex  items-center justify-center z-50 bg-black bg-opacity-75 w-[100%]">
          <div className="relative mt-[12rem] w-[90%] h-[90%] m-auto flex ">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain w-[90%] h-[100%] m-auto"
            />
          </div>
          <button
            className=" absolute top-[8rem] right-[8rem] text-yellow-400 text-[50px]"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ImgModal;
