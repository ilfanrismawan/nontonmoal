"use client";
import { storage } from "@/firebaseConfig";
import { ref } from "@firebase/storage";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { Progress } from "antd";
import { useRouter } from "next/navigation";

const Upload = () => {
  const [imageFile, setimageFile] = useState<File>();
  const [downloadUrl, setdownloadUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [progressUpload, setprogressUpload] = useState(0);
  const router = useRouter();

  const handleSelectedFIle = (files: any) => {
    setimageFile(files[0]);
  };

  const handleUploadFile = (files: any) => {
    if (imageFile) {
      const name = imageFile.name;

      const storageRef = ref(storage, `image/${name}`);

      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setprogressUpload(progress);
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          throw new Error(`Error: ${error}`);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setdownloadUrl(url);
          });
        }
      );
    } else {
      throw new Error("File not found");
    }
  };
  const handleRemoveFile = () => {
    return setimageFile(undefined);
  };

  return (
    <div className="container mt-5 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <input
          type="file"
          className="text-white"
          placeholder="Select file to upload"
          onChange={(files) => handleSelectedFIle(files.target.files)}
        />

        <div className="mt-5 grid w-auto grid-cols-2 border border-gray-300 bg-zinc-800 py-6 px-7 text-white shadow">
          {imageFile && (
            <>
              <div className="flex w-full flex-row">
                <div className="w-full">
                  <ul>
                    <li className="font-bold">{imageFile && imageFile.name}</li>
                    <li className="mb-3 font-light">
                      {`Size: ${imageFile && imageFile.size}`}
                    </li>
                  </ul>
                  <h5 className="font-bold">{imageFile && imageFile.name}</h5>
                  <button
                    onClick={handleUploadFile}
                    className="rounded-md bg-blue-700 py-2 px-4 text-white"
                    type="submit"
                  >
                    Upload
                  </button>
                  <Progress percent={progressUpload} />
                  {downloadUrl && (
                    <>
                      <div className="flex w-full flex-row items-center">
                        <Image
                          src={downloadUrl}
                          alt={downloadUrl}
                          width={200}
                          height={200}
                          style={{ objectFit: "cover" }}
                        />
                        <p
                          className="ml-7 cursor-pointer"
                          onClick={() => router.push(downloadUrl)}
                        >
                          {downloadUrl}
                        </p>
                      </div>
                    </>
                  )}
                  <p></p>
                </div>
              </div>
              <div className="flex flex-row items-baseline justify-end gap-7">
                <CiCircleRemove size={30} onClick={handleRemoveFile} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
