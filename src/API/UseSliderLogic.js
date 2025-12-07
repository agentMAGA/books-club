import { create } from 'zustand'
import { slaiderPoem } from '../data/slaiderPoem';
import { slaiderTime } from '../data/slaiderTime';

export const useSliderEvents = create((set) => ({
  numberMas: 0,
  // Временный массив с данными о мероприятиях для эмуляции слайдера.
  slaiderTime: slaiderTime ,

  // Условие для переключения слайдов в мероприятиях.

  setEventsPlus: () => set((huge) => (
    (huge.numberMas < huge.slaiderTime.length - 1) ? { numberMas: huge.numberMas + 1 } : { numberMas: 0 }
  )),
  setEventsMinus: () => set((huge) => (
    (huge.numberMas <= 0) ? { numberMas: huge.slaiderTime.length - 1 } : { numberMas: huge.numberMas - 1 }))
}),
);

export const useSliderPoem = create((set) => ({
  neumbersPoem: 0,
  
  // Временный массив с данными о стихах для эмуляции слайдера.

  slaiderPoem: slaiderPoem,

  // Условие для переключения слайдов в стихах.

  setPoemPlus: () => set((huge) => (
    (huge.neumbersPoem < huge.slaiderPoem.length - 1) ? { neumbersPoem: huge.neumbersPoem + 1 } : { neumbersPoem: 0 }
  )),
  setPoemMinus: () => set((huge) => (
    (huge.neumbersPoem <= 0) ? { neumbersPoem: huge.slaiderPoem.length - 1 } : {
      neumbersPoem: huge.neumbersPoem - 1

  }))
}));
