const uploadImageToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'store-app-images');

  const response = await fetch('https://api.cloudinary.com/v1_1/dtprgshok/image/upload', {
    method: 'POST',
    body: formData,
  });
  const cloudinaryData = await response.json();
  if (response.status < 200 || response.status > 299) {
    throw new Error(':(');
  }
  return cloudinaryData.secure_url;
};

export default uploadImageToCloudinary;
