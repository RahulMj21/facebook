import Image from "next/image";
import { useSession } from "next-auth/client";
import { VideoCameraIcon, CameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import firebase from "firebase";
import { db, storage } from "../firebase";
import { useRef, useState } from "react";

const InputBox = () => {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [previewPostImage, setPreviewPostImage] = useState(null);

  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        image: session.user.image,
        email: session.user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (previewPostImage) {
          const uploadTask = storage
            .ref(`posts`)
            .child(doc.id)
            .putString(previewPostImage, "data_url");

          setPreviewPostImage(null);

          uploadTask.on(
            "state_change",
            null,
            (error) => console.log(error),
            () => {
              //when upload completes
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    {
                      merge: true,
                    }
                  );
                });
            }
          );
        }
      })
      .catch((error) => console.log("post send error-->", error));

    inputRef.current.value = "";
  };

  const setImageToPost = (e) => {
    if (window.FileReader) {
      const reader = new FileReader();
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }

      reader.onload = (readerEvent) =>
        setPreviewPostImage(readerEvent.target.result);
    }
  };

  return (
    <div className="bg-white p-1 sm:p-2 rounded-2xl text-gray-500 font-medium mt-6 shadow-md mx-2 sm:mx-0">
      <div className="flex items-center space-x-2 p-2 pb-4 sm:space-x-4 sm:p-4 border-b border-gray-100">
        <Image
          className="rounded-full"
          src={session.user.image}
          height={40}
          width={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full px-5 bg-gray-100 focus:outline-none h-12 flex-grow"
            type="text"
            placeholder={`Write Something Here...`}
          />
          <button type="submit" hidden onClick={sendPost}>
            submit
          </button>
          <input
            type="file"
            hidden
            ref={filePickerRef}
            onChange={setImageToPost}
          />
        </form>
        {previewPostImage && (
          <div className="flex flex-col filter hover:briggtness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <img
              className="h-10 object-contain"
              src={previewPostImage}
              alt="image"
            />
            <p
              className="text-xs text-red-500 text-center"
              onClick={() => setPreviewPostImage(null)}
            >
              Remove
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-evenly">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
