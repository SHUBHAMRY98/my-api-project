import { validateData } from "@/utils/helpers";
import { apiClient } from "./apiClient";

export async function generateContent(token_type, token, formdata) {
  try {
    const response = await apiClient.post(
      "/api/content-generation/generate",
      formdata,
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );
    return {
      success: true,
      data: response?.data || {},
      message: "Request successfully processed.",
    };
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

export async function generateScheduledContent(token_type, token, formdata) {
  try {
    const response = await apiClient.post(
      `${
        formdata?.enable_scheduled_execution
          ? "/api/content-generation/publication-tasks"
          : "/api/content-generation/generate"
      }`,
      formdata,
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );
    return {
      success: true,
      data: response?.data || {},
      message: "Request successfully processed.",
    };
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

export async function getContentPreview(token_type, token, params = {}) {
  try {
    const response = await apiClient.get(
      `/api/content-generation/single-generation/${params?.previewid}`,
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
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

export async function singleGenerationPublish(token_type, token, formdata) {
  try {
    const response = await apiClient.post(
      "/api/content-generation/single-generation/publish",
      formdata,
      {
        headers: {
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

export async function updateSingleGenerationArticle(
  token_type,
  token,
  formdata
) {
  try {
    const response = await apiClient.patch(
      `/api/content-generation/single-generation/${formdata?.article_id}`,
      formdata,
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );
    return {
      success: true,
      data: { ...response?.data, message: "Record successfully updated" } || {},
    };
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

export async function deleteSingleGenerationArticle(
  token_type,
  token,
  recordid
) {
  try {
    const response = await apiClient.delete(
      `/api/content-generation/single-generation/${recordid}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `${token_type} ${token}`,
        },
      }
    );
    return {
      success: true,
      recordid: recordid,
      message: "Record deleted successfully",
    };
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

export async function getFormOptionsProjects(token_type, token, params = {}) {
  try {
    const response = await apiClient.get(
      `/api/content-generation/form-options/projects`,
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

export async function fetchArticles(token_type, token, params = {}) {
  let apiendpoint = `/api/content-generation/publication-tasks?page=${params?.page}&size=${params?.size}`;

  if (validateData(params?.project_id)) {
    apiendpoint += `&project_id=${params?.project_id}`;
  }

  try {
    const response = await apiClient.get(apiendpoint, {
      headers: {
        Authorization: `${token_type} ${token}`,
      },
    });

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

export async function fetchSingleArticles(token_type, token, params = {}) {
  try {
    const response = await apiClient.get(
      `/api/content-generation/single-generation?page=${params?.page}&size=${params?.size}`,
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
