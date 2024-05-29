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
      <div className="flex items-center justify-center m-4 h-[600px]">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={0}
          className="object-fill cursor-pointer h-full"
          onClick={openModal}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 w-full h-full">
          <div className="relative w-[80%] h-[80%] max-w-[80%] max-h-[80%] mt-[12rem] mb-[80px]">
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="contain"
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-[150px] right-[150px] text-yellow-400 text-[100px]"
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
