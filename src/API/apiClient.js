const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV ? "/api" : "http://91.107.123.186:8080/api");

const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  const config = {
    ...options,
    headers: {
      ...(options.headers || {}),
    },
  };

  // Добавляем Content-Type только когда есть body
  if (options.body && !config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    let errorMessage = `Ошибка ${response.status}`;
    let errorData = null;
    try {
      errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // тело ответа пустое или не JSON — это ок
    }

    const error = new Error(errorMessage);
    error.status = response.status;
    error.url = url;
    error.method = config.method || "GET";
    error.data = errorData;
    throw error;
  }

  // ✅ корректная обработка DELETE / 204
  if (response.status === 204) {
    return null;
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();
  return text || null;
};

export default apiCall;
