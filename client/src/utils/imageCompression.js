import imageCompression from 'browser-image-compression';

export async function compressImage(file) {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  };
  
  try {
    return await imageCompression(file, options);
  } catch (error) {
    throw new Error('Image compression failed');
  }
}