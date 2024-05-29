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
      <div className="flex flex-col h-[150px] items-center justify-center m-4">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="object-cover cursor-pointer"
          onClick={openModal}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={800}
              className="object-contain"
            />
            <button
              className="absolute top-[-5rem] right-[-5rem] mt-2 mr-2 text-yellow-400 text-[50px]"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgModal;
