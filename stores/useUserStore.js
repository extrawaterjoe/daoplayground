import create from "zustand"

export const useUserStore = create(set => ({
  daoExpanded: false,
  setDaoExpanded: () => set(state => ({ daoExpanded: !state.daoExpanded })),

  expandedDao: null,
  setExpandedDao: dao => set({ expandedDao: dao }),

  expandedPanel: "tokens",
  setExpandedPanel: panel => set({ expandedPanel: panel }),
}))
