import { apiClient } from "./apiClient";

export async function getProfileDetail(token_type, token) {
  try {
    const response = await apiClient.get("/users/me", {
      headers: {
        Authorization: `${token_type} ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log("error =>", error);
    return error;
  }
}

export async function updateProfileDetail(token_type, token, formdata, type = "profile") {  
  try {
    const response = await apiClient.patch(
      "/users/me",
      formdata,{
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );

    let message = `Profile updated successfully.`;
    if(type === "changepassword"){
      message = `Password successfully changed.`;
    }
    return { success: true, message: message, data:response?.data };

  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: error || errmsg };
  }
}

export async function updateProfilePicture(token_type, token, formdata) {
  try {
    const response = await apiClient.post(
      "/users/upload-image",
      formdata,
      {
        headers: {
          "accept": "application/json",
          'Content-Type': 'multipart/form-data',
          Authorization: `${token_type} ${token}`,
        },
      }
    );

    const message = `Profile picture successfully updated.`;
    return { success: true, message: message, data:response?.data };

  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: error || errmsg };
  }
}
