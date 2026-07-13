import { createContext, useContext, useState, ReactNode } from "react";

interface MusicPlayerContextType {
  currentlyPlayingId: string | null;
  setCurrentlyPlayingId: (id: string | null) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType>({
  currentlyPlayingId: null,
  setCurrentlyPlayingId: () => {},
});

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);
  return (
    <MusicPlayerContext.Provider value={{ currentlyPlayingId, setCurrentlyPlayingId }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}
