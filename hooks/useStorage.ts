import { storage } from "@/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

export const handleUploadFile = (files: any) => {
  const [imageFile, setimageFile] = useState<File>();
  const [downloadUrl, setdownloadUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [progressUpload, setprogressUpload] = useState(0);
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
