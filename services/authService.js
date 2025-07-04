import axios from "axios";
import { apiClient, urlEncodedApiClient } from "./apiClient";
import { setCookie } from "@/utils/cookies";

export const login = async (credentials) => {
  try {
    const response = await urlEncodedApiClient.post(
      "/auth/jwt/login",
      credentials
    );
    const getUserInfoResponse = await getUserInfo({ ...response?.data });

    let message = `Login successfully.`;
    let canshowverification = false;
    let isloggedin = false;
    let success = false;

    if (getUserInfoResponse?.id && !getUserInfoResponse?.is_verified) {
      requestVerifyToken({ email: getUserInfoResponse?.email });
      message = `Your account verification is pending. Please verify your email.`;
      canshowverification = true;
      success = false;
    }

    if (
      getUserInfoResponse?.id &&
      getUserInfoResponse?.is_verified &&
      !getUserInfoResponse?.is_active
    ) {
      message = `Unable to login.`;
      success = false;
    }

    if (
      getUserInfoResponse?.id &&
      getUserInfoResponse?.is_verified &&
      getUserInfoResponse?.is_active
    ) {
      localStorage.setItem("wpaiauth", JSON.stringify({...response?.data, ...getUserInfoResponse} || {}));
      setCookie("wpaiauth", JSON.stringify(response?.data || {}), 365);
      isloggedin = true;
      success = true;
    }
    return { success, message, canshowverification };
  } catch (error) {
    let errmsg = error?.response?.data?.detail?.message;
    let canshowverification = false;

    if (error?.response?.data?.detail === "LOGIN_BAD_CREDENTIALS") {
      errmsg = "Incorrect email or password. Please check your login details.";
    }
    if (error?.response?.data?.detail === "LOGIN_USER_NOT_VERIFIED") {
      canshowverification = true;
      errmsg =
        "Your account verification is pending. Please verify your email.";
    }
    return {
      success: false,
      message: errmsg || error,
      canshowverification: canshowverification,
    };
  }
};

export const logout = async (credentials) => {
  try {
    const response = await apiClient.post("/auth/jwt/logout", credentials);

    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const register = async (credentials) => {
  try {
    const response = await apiClient.post("/auth/register", credentials);
    const message =
      response?.data?.detail?.message ||
      `Registration successful. A verification code has been sent to ${credentials?.email}. Please verify your email.`;
    requestVerifyToken({ email: credentials?.email });
    return { success: true, message: message, email: credentials?.email };
  } catch (error) {
    let errmsg = error?.response?.data?.detail?.message;
    if (error?.response?.data?.detail === "REGISTER_USER_ALREADY_EXISTS") {
      errmsg = "This email is already register with us.";
    }
    return { success: false, message: errmsg || error };
  }
};

export const forgotPassword = async (credentials) => {
  try {
    const response = await apiClient.post("/auth/forgot-password", credentials);
    if (response.status === 202) {
      const message = `A verification code has been sent to ${credentials?.email}. Please verify your email.`;
      return {
        success: true,
        message: message,
        email: credentials?.email,
        canshowverification: true,
      };
    }
  } catch (error) {
    let errmsg = error?.response?.data?.detail?.message;
    let canlogin = false;
    if (error?.response?.data?.detail === "RESET_PASSWORD_BAD_TOKEN") {
      errmsg = "Invalid code entered.";
    }
    if (
      error?.response?.data?.detail?.code === "RESET_PASSWORD_INVALID_PASSWORD"
    ) {
      errmsg =
        error?.response?.data?.detail?.reason || "Invalid password entered, Plese enter valid password.";
    }
    return { success: false, canlogin: canlogin, message: errmsg || error };
  }
};

export const resetPassword = async (credentials) => {
  try {
    const response = await apiClient.post("/auth/reset-password", credentials);
    const message = `Password successfully reset.`;
    return { success: true, canlogin: true, message: message };
  } catch (error) {
    let errmsg = error?.response?.data?.detail?.message;
    let canlogin = false;
    if (error?.response?.data?.detail === "RESET_PASSWORD_BAD_TOKEN") {
      errmsg = "Invalid code entered.";
    }
    if (
      error?.response?.data?.detail?.code === "RESET_PASSWORD_INVALID_PASSWORD"
    ) {
      errmsg =
        error?.response?.data?.detail?.reason || "Invalid password entered.";
    }
    return { success: false, canlogin: canlogin, message: errmsg || error };
  }
};

export const requestVerifyToken = async (credentials) => {
  try {
    const response = await apiClient.post(
      "/auth/request-verify-token",
      credentials
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
};

export const authVerify = async (credentials) => {
  try {
    const response = await apiClient.post("/auth/verify", credentials);
    const message = `Email successfully verified.`;
    return { success: true, canlogin: true, message: message };
  } catch (error) {
    let errmsg = error?.response?.data?.detail?.message;
    let canlogin = false;
    if (error?.response?.data?.detail === "VERIFY_USER_BAD_TOKEN") {
      errmsg = "Invalid code entered.";
    }
    if (error?.response?.data?.detail === "VERIFY_USER_ALREADY_VERIFIED") {
      errmsg = "This email already verified, Please login";
      canlogin = true;
    }
    return { success: false, canlogin: canlogin, message: errmsg || error };
  }
};

export const getUserInfo = async ({ ...props }) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `${props?.token_type} ${props?.access_token}`,
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
};
