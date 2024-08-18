import {create} from 'zustand';

/********** examples *********/
export const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
  updateBears: newBears => set({bears: newBears}),
  test: num =>
    set(state => ({
      bears: state.bears + num,
    })),
}));

export const test = () => useStore(state => state.test);
/*************************************/

export const store = create(set => ({
  counters: {
    'New Counter': 0,
  },
  currentCounter: 'New Counter',
  increase: counterName =>
    set(state => ({
      ...state,
      counters: {
        ...state.counters,
        [counterName]: state.counters[counterName] + 1,
      },
    })),
  decrease: counterName =>
    set(state => ({
      ...state,
      counters: {
        ...state.counters,
        [counterName]: state.counters[counterName] - 1,
      },
    })),
  reset: counterName =>
    set(state => ({
      ...state,
      counters: {
        ...state.counters,
        [counterName]: 0,
      },
    })),
  addCounter: counterName =>
    set(state => ({
      ...state,
      counters: {
        ...state.counters,
        [counterName]: 0,
      },
      currentCounter: counterName,
    })),
  removeCounter: counterName =>
    set(state => ({
      ...state,
      counters: {
        ...state.counters,
        [counterName]: undefined,
      },
      currentCounter: Object.keys(state.counters)[
        Object.keys(state.counters).length - 1
      ],
    })),

  removeAllCounters: () =>
    set({
      counters: {
        'New Counter': 0,
      },
      currentCounter: 'New Counter',
    }),
}));

//export const test = store(state => state.test);

export const counters = () => store(state => state.counters);
export const currentCounter = () => store(state => state.currentCounter);
export const addCounter = () => store(state => state.addCounter);
export const removeCounter = () => store(state => state.removeCounter);
export const removeAllCounters = () => store(state => state.removeAllCounters);
export const increase = () => store(state => state.increase);
export const decrease = () => store(state => state.decrease);
export const reset = () => store(state => state.reset);
