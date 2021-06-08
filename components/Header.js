import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { useSession, signOut } from "next-auth/client";

function Header() {
  const [session] = useSession();

  return (
    <div className="flex items-center p-2 lg:p-5 shadow-md sticky top-0 z-50 bg-white">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 bg-gray-100  p-2 rounded-full">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="bg-transparent  ml-2  outline-none placeholder-gray-500  hidden lg:inline-flex "
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-2 mr-2 sm:mr-0">
        {/* profile Image */}
        <Image
          className="rounded-full cursor-pointer inline-block"
          onClick={signOut}
          src={session.user.image}
          height={40}
          width={40}
          objectFit="contain"
        />
        <p className="whitespace-nowrap font-semibold pr-3 hidden lg:inline-flex">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
