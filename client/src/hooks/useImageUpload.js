import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { app } from '../firebase';
import { IMAGE_UPLOAD_CONFIG } from '../utils/constants';

export const useImageUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  const uploadImage = async (file) => {
    if (!file) {
      setUploadError('Please select an image');
      return null;
    }

    if (file.size > IMAGE_UPLOAD_CONFIG.MAX_SIZE) {
      setUploadError('File size too large');
      return null;
    }

    if (!IMAGE_UPLOAD_CONFIG.ACCEPTED_TYPES.includes(file.type)) {
      setUploadError('Invalid file type');
      return null;
    }

    try {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress.toFixed(0));
          },
          (error) => {
            setUploadError('Upload failed');
            setUploadProgress(null);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setUploadProgress(null);
            setUploadError(null);
            resolve(downloadURL);
          }
        );
      });
    } catch (error) {
      setUploadError('Upload failed');
      setUploadProgress(null);
      return null;
    }
  };

  return { uploadImage, uploadProgress, uploadError };
};