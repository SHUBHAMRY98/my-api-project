/*General helper functions*/
export function validateData(data) {
  const invalidValues = [
    undefined,
    null,
    "",
    "undefined",
    "NaN",
    "NA",
    "false",
    "data",
  ];
  return !invalidValues.includes(data);
}

export function getExcludedQueryParams(exclude = "") {
  const params = new URLSearchParams(window.location.search);
  const excludedKeys = exclude ? exclude?.split(",").map((s) => s.trim()) : [];
  let extraArg = "";

  for (const [key, value] of params.entries()) {
    if (excludedKeys?.includes(key)) continue;
    extraArg += `${key}=${encodeURIComponent(value)}&`;
  }

  if (extraArg.endsWith("&")) {
    extraArg = extraArg.slice(0, -1);
  }

  return extraArg;
}

export function extractGoogleDriveImageId(url) {
  const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export function numberFormat(number, decimals = 0) {
  if (number == null || isNaN(number)) return "0";

  return Number(number).toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export const getDifficultyColor = (value) => {
  if (value == null) return "";

  if (value >= 0 && value <= 20) {
    return "veryeasycolor";
  } else if (value >= 21 && value <= 40) {
    return "easycolor";
  } else if (value >= 41 && value <= 60) {
    return "middlehardcolor";
  } else if (value >= 61 && value <= 80) {
    return "hardcolor";
  } else if (value >= 81 && value <= 100) {
    return "veryhardcolor";
  } else {
    return "";
  }
};

export const parseKeywords = (text) => {
  return text
    .split("\n")
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword);
};

export const downloadCSV = (data) => {
  const csvContent = data;
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const tempLink = document.createElement("a");
  tempLink.href = url;
  tempLink.download = "keywords.csv";
  tempLink.click();

  URL.revokeObjectURL(url);
};

export const handleFileRead = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;

      const rows = content.split(/\r?\n/).filter(row => row.trim() !== '');

      console.log('File data as array:', rows);
    };

    reader.readAsText(file);
  }
};
