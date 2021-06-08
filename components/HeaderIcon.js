function HeaderIcon({ Icon, active }) {
  return (
    <div className="cursor-pointer md:active:border-b-2 active:border-blue-500 sm:px-4 md:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl   group">
      <Icon
        className={`h-5 group-hover:text-blue-500 ${active && "text-blue-500"}`}
      />
    </div>
  );
}

export default HeaderIcon;
