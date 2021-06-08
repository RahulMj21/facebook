import Image from "next/image";
import { ThumbUpIcon, ChatAltIcon, ShareIcon } from "@heroicons/react/outline";

const Post = ({ name, message, email, image, postImage, timestamp }) => {
  return (
    <div className="flex flex-col items-start bg-white rounded-2xl shadow-md mt-6">
      <div className="p-5 flex flex-col space-y-3">
        <div className="flex items-center space-x-2">
          <Image
            src={image}
            height={40}
            width={40}
            layout="fixed"
            className="rounded-full"
          />
          <div className="flex flex-col space-y-1 items-center">
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-gray-400 text-xs">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <h2 className="text-xl font-semibold">{message}</h2>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96  w-full bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      {/* footer section of the post */}
      <div className="flex items-center justify-between w-full rounded-b-2xl overflow-hidden border-t">
        <div className="inputIcon rounded-none text-gray-500 px-10">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none text-gray-500 px-10">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none text-gray-500 px-10">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
