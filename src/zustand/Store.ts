import {create} from 'zustand';

type stateType = any; // modify this later

export const store = create(set => ({
  counters: {
    'New Counter': 0,
  },
  currentCounter: 'New Counter',
  increase: (counterName: string) =>
    set((state: stateType) => ({
      ...state,
      counters: {
        ...state.counters,
        [counterName]: state.counters[counterName] + 1,
      },
    })),
  decrease: (counterName: string) =>
    set((state: stateType) => ({
      ...state,
      counters: {
        ...state.counters,
        [counterName]: state.counters[counterName] - 1,
      },
    })),
  reset: (counterName: string) =>
    set((state: stateType) => ({
      ...state,
      counters: {
        ...state.counters,
        [counterName]: 0,
      },
    })),
  addCounter: (counterName: string) =>
    set((state: stateType) => ({
      ...state,
      counters: {
        ...state.counters,
        [counterName]: 0,
      },
      currentCounter: counterName,
    })),
  editCounter: (counterName: string, newCounterName: string, count: number) =>
    set((state: stateType) => {
      let newCounterState = {...state.counters};
      delete newCounterState[counterName];
      newCounterState[newCounterName] = count;
      return {
        ...state,
        counters: {
          ...newCounterState,
        },
        currentCounter: newCounterName,
      };
    }),
  setCurrentCounter: (counterName: string) =>
    set((state: stateType) => ({
      ...state,
      currentCounter: counterName,
    })),
  removeCounter: (counterName: string) =>
    set((state: stateType) => {
      let newCounterState = {...state.counters};
      delete newCounterState[counterName];

      return {
        ...state,
        counters: {
          ...newCounterState,
        },
        currentCounter:
          Object.keys(newCounterState)[Object.keys(newCounterState).length - 1],
      };
    }),
  removeAllCounters: () =>
    set({
      counters: {
        'New Counter': 0,
      },
      currentCounter: 'New Counter',
    }),
}));

export const counters = () => store((state: stateType) => state.counters);
export const currentCounter = () =>
  store((state: stateType) => state.currentCounter);
export const addCounter = () => store((state: stateType) => state.addCounter);
export const removeCounter = () =>
  store((state: stateType) => state.removeCounter);
export const editCounter = () => store((state: stateType) => state.editCounter);
export const setCurrentCounter = () =>
  store((state: stateType) => state.setCurrentCounter);
export const removeAllCounters = () =>
  store((state: stateType) => state.removeAllCounters);
export const increase = () => store((state: stateType) => state.increase);
export const decrease = () => store((state: stateType) => state.decrease);
export const reset = () => store((state: stateType) => state.reset);
