import Image from "next/image";

const Contact = ({ src, name }) => {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer rounded-xl">
      <Image
        className="rounded-full"
        src={src}
        width={50}
        height={50}
        objectFit="cover"
        layout="fixed"
      />
      <p>{name}</p>
      <div className="absolute bg-green-400 rounded-full h-2 w-2 left-5 bottom-1 animate-bounce" />
    </div>
  );
};

export default Contact;
