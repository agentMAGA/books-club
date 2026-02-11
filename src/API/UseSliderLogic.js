import { create } from 'zustand'
import axios from 'axios';

export const useSliderEvents = create((set) => ({
  numberMas: 0,
  slaiderTime: [],
  loading: false,
  error: null,

  fetchSliderEvents: async (url = 'http://91.107.123.186:8080/api/events') => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(url);

      // Проверяем что данные пришли в правильном формате
      if (!Array.isArray(response.data)) {
        throw new Error('Неверный формат данных: ожидается массив');
      }

      // Сохраняем данные и сбрасываем номер на 0
      set({
        slaiderTime: response.data,
        numberMas: 0,
        loading: false,
        error: null,
      });

      console.log('Загружено стихов:', response.data.length);
      return response.data;

    } catch (err) {
      console.error('Ошибка загрузки мероприятий:', err);

      let errorMessage = 'Неизвестная ошибка';

      if (err.response) {
        switch (err.response.status) {
          case 404:
            errorMessage = 'Мероприятия не найдены';
            break;
          case 500:
            errorMessage = 'Ошибка сервера';
            break;
          case 401:
            errorMessage = 'Требуется авторизация';
            break;
          default:
            errorMessage = err.response.data?.message || `Ошибка ${err.response.status}`;
        }
      } else if (err.request) {
        errorMessage = 'Сервер не отвечает';
      } else {
        errorMessage = err.message || 'Ошибка запроса';
      }

      set({
        numberMas: 0,
        slaiderTime: [],
        loading: false,
        error: errorMessage
      });

      throw new Error(errorMessage);
    }
  },

  // Условие для переключения слайдов в мероприятиях.
  setEventsPlus: () => set((huge) => (
    (huge.numberMas < huge.slaiderTime.length - 1) ? { numberMas: huge.numberMas + 1 } : { numberMas: 0 }
  )),
  setEventsMinus: () => set((huge) => (
    (huge.numberMas <= 0) ? { numberMas: huge.slaiderTime.length - 1 } : { numberMas: huge.numberMas - 1 }))
}),
);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const useSliderPoem = create((set) => ({
  neumbersPoem: 0,
  slaiderPoem: [],
  loading: false,
  error: null,

  fetchSliderPoem: async (url = 'http://91.107.123.186:8080/api/posts') => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(url);

      // Проверяем что данные пришли в правильном формате
      if (!Array.isArray(response.data)) {
        throw new Error('Неверный формат данных: ожидается массив');
      }

      // Сохраняем данные и сбрасываем номер на 0
      set({
        slaiderPoem: response.data,
        neumbersPoem: 0,
        loading: false,
        error: null
      });

      console.log('Загружено стихов:', response.data.length);
      return response.data;

    } catch (err) {
      console.error('Ошибка загрузки стихов:', err);

      let errorMessage = 'Неизвестная ошибка';

      if (err.response) {
        switch (err.response.status) {
          case 404:
            errorMessage = 'Стихи не найдены';
            break;
          case 500:
            errorMessage = 'Ошибка сервера';
            break;
          case 401:
            errorMessage = 'Требуется авторизация';
            break;
          default:
            errorMessage = err.response.data?.message || `Ошибка ${err.response.status}`;
        }
      } else if (err.request) {
        errorMessage = 'Сервер не отвечает';
      } else {
        errorMessage = err.message || 'Ошибка запроса';
      }

      set({
        slaiderPoem: [],
        neumbersPoem: 0,
        loading: false,
        error: errorMessage
      });

      throw new Error(errorMessage);
    }
  },

  // Условие для переключения слайдов в стихах.
  setPoemPlus: () => set((huge) => (
    (huge.neumbersPoem < huge.slaiderPoem.length - 1) ? { neumbersPoem: huge.neumbersPoem + 1 } : { neumbersPoem: 0 }
  )),
  setPoemMinus: () => set((huge) => (
    (huge.neumbersPoem <= 0) ? { neumbersPoem: huge.slaiderPoem.length - 1 } : {
      neumbersPoem: huge.neumbersPoem - 1

    }))
}));
