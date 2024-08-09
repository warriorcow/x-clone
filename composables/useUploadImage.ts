export const useUploadImage = async (image_type: 'cover' | 'avatar', file: File) => {
  const userStore = useUserStore();
  const { updateAuthUserProfile } = useUserStore();
  const { authUserProfile } = storeToRefs(userStore)
  async function getBase64(file: File) {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const { data } = await useFetch('/api/upload-image', {
    method: 'post',
    headers: {
      "Content-type": "multipart/form-data"
    },
    body: {
      name: file.name,
      file: await getBase64(file),
      type: file.type,
      id: authUserProfile.value.id,
      image_type
    }
  });

  updateAuthUserProfile({
    [image_type]: data.value.data
  })
}
