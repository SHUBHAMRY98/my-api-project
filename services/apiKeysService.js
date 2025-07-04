import { apiClient } from "./apiClient";

export async function fetchApiKeys(token_type, token, params = {}) {
  try {
    const response = await apiClient.get(
      `/api/api-keys/?page=${params?.page}&size=${params?.size}`,
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    let text = error?.response?.data?.detail;
    if (!validateData(text)) {
      text = error?.response?.data || errmsg;
    }

    const msginfo = {
      error: true,
      text,
      // stack: error.stack || null,
    };

    return { success: false, message: text, msginfo };
  }
}

export async function addApiKey(token_type, token, formdata) {
  try {
    const response = await apiClient.post("/api/api-keys/", formdata, {
      headers: {
        Authorization: `${token_type} ${token}`,
      },
    });
    return { success: true, data: response?.data || {} };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    let text = error?.response?.data?.detail;
    if (!validateData(text)) {
      text = error?.response?.data || errmsg;
    }

    const msginfo = {
      error: true,
      text,
      // stack: error.stack || null,
    };

    return { success: false, message: text, msginfo };
  }
}

export async function updateApiKey(token_type, token, recordid, formdata) {
  try {
    const response = await apiClient.patch(
      `/api/api-keys/${recordid}`,
      formdata,
      {
        headers: {
          accept: "application/json",
          Authorization: `${token_type} ${token}`,
        },
      }
    );
    return { success: true, data: response?.data || {} };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    let text = error?.response?.data?.detail;
    if (!validateData(text)) {
      text = error?.response?.data || errmsg;
    }

    const msginfo = {
      error: true,
      text,
      // stack: error.stack || null,
    };

    return { success: false, message: text, msginfo };
  }
}

export async function deleteApiKey(token_type, token, recordid) {
  try {
    const response = await apiClient.delete(`/api/api-keys/${recordid}`, {
      headers: {
        accept: "application/json",
        Authorization: `${token_type} ${token}`,
      },
    });

    return { success: true, recordid: recordid };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    let text = error?.response?.data?.detail;
    if (!validateData(text)) {
      text = error?.response?.data || errmsg;
    }

    const msginfo = {
      error: true,
      text,
      // stack: error.stack || null,
    };

    return { success: false, message: text, msginfo };
  }
}
