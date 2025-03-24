const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
        // Remove the Access-Control-Allow-Origin header
        // as it should be set by the server, not the client
      }
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Cloudinary Error:', errorData);
      throw new Error(errorData.error?.message || 'Image upload failed');
    }
    
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

export default uploadImage;