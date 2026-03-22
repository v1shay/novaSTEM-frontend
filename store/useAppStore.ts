import { create } from "zustand"

interface AppState {
  themeMode: "light" | "dark"
  toggleTheme: () => void
}

export const useAppStore = create<AppState>((set) => ({
  themeMode: "dark",
  toggleTheme: () =>
    set((state) => ({
      themeMode: state.themeMode === "light" ? "dark" : "light",
    })),
}))
