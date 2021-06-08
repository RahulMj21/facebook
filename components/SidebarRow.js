import Image from "next/image";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      {src && (
        <Image
          src={src}
          height={30}
          width={30}
          layout="fixed"
          className="rounded-full"
        />
      )}
      {Icon && <Icon className="h-7 w-7 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
