import { validateData } from "@/utils/helpers";
import { apiClient } from "./apiClient";

export async function fetchTags(token_type, token, params = {}) {
  try {
    const response = await apiClient.get(
      `/api/tags?&page=${params?.page}&size=${params?.size}`,
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

    return { success: false, message: text, msginfo, items:[] };
  }
}

export async function addTag(token_type, token, formdata) {
  try {
    const response = await apiClient.post("/api/tags/", formdata, {
      headers: {
        Authorization: `${token_type} ${token}`,
      },
    });
    return { success: true, data: response?.data || {} };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: error || errmsg };
  }
}

export async function fetchTagsOrg(token_type, token, params = {}) {
  const tags = [
    { value: "ai_writing", label: "AI Writing" },
    { value: "seo_tips", label: "SEO Tips" },
    { value: "how_to", label: "How-To" },
    { value: "beginners_guide", label: "Beginner’s Guide" },
    { value: "industry_trends", label: "Industry Trends" },
    { value: "productivity_hacks", label: "Productivity Hacks" },
    { value: "social_media", label: "Social Media" },
    { value: "remote_work", label: "Remote Work" },
    { value: "freelancing", label: "Freelancing" },
    { value: "mental_health", label: "Mental Health" },
    { value: "investing", label: "Investing" },
    { value: "mobile_apps", label: "Mobile Apps" },
    { value: "personal_development", label: "Personal Development" },
    { value: "content_marketing", label: "Content Marketing" },
    { value: "fitness_goals", label: "Fitness Goals" },
    { value: "data_science", label: "Data Science" },
    { value: "ux_design", label: "UX Design" },
    { value: "green_living", label: "Green Living" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "startups", label: "Startups" },
  ];

  return tags;
}
