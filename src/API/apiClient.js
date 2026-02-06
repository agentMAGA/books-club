const API_BASE_URL = "http://91.107.123.186:8080/api";

const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    let errorMessage = `Ошибка ${response.status}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // тело ответа пустое или не JSON — это ок
    }
    throw new Error(errorMessage);
  }

  // ✅ корректная обработка DELETE / 204
  if (response.status === 204) {
    return null;
  }

  return response.json();
};

export default apiCall;
