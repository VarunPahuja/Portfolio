import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "@/hooks/use-sound";
import { useMusicPlayer } from "@/hooks/use-music-player";

interface MusicVinylTileProps {
  src: string;
  coverImage: string;
}

const MusicVinylTile = ({ src, coverImage }: MusicVinylTileProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { soundEnabled } = useSound();
  const { currentlyPlayingId, setCurrentlyPlayingId } = useMusicPlayer();
  const tileId = src;

  useEffect(() => {
    if (!soundEnabled && isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsPlaying(false);
    }
  }, [soundEnabled, isPlaying]);

  useEffect(() => {
    if (currentlyPlayingId !== tileId && isPlaying) {
      // Another tile started playing — pause this one
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }, [currentlyPlayingId, tileId, isPlaying]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggle = async (e: React.MouseEvent | React.PointerEvent) => {
    e.stopPropagation();

    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsPlaying(false);
      setCurrentlyPlayingId(null);
      return;
    }

    if (!soundEnabled) return;

    setCurrentlyPlayingId(tileId);

    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.volume = 0.35;
      audioRef.current.loop = true;
    }

    try {
      audioRef.current.currentTime = 0;
      
      // Start animation immediately
      setIsPlaying(true);
      
      await audioRef.current.play();
    } catch (err) {
      console.error("Audio play failed for:", src, err);
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative overflow-visible w-36 h-36 select-none"
      onPointerDown={(e) => e.stopPropagation()}
    >
      {/* Vinyl disc */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 50, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="absolute top-2 left-2 w-32 h-32 z-0"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-full rounded-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 border border-zinc-600 shadow-lg relative"
            >
              <div className="absolute inset-3 rounded-full border border-zinc-600/30" />
              <div className="absolute inset-6 rounded-full border border-zinc-600/20" />
              <div className="absolute inset-9 rounded-full border border-zinc-600/30" />
              <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-zinc-900" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Album cover */}
      <div 
        className="absolute inset-0 rounded-lg overflow-hidden shadow-xl z-10 bg-zinc-800 cursor-pointer"
        onClick={toggle}
      >
        <img
          src={coverImage}
          alt="Album Cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <AnimatePresence mode="wait">
        {!soundEnabled && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -bottom-7 left-1/2 -translate-x-1/2
                       whitespace-nowrap pointer-events-none select-none"
          >
            <div className="flex items-center gap-1.5 bg-background/90
                            backdrop-blur-sm border border-border/60
                            rounded-full px-3 py-1 shadow-sm">
              <span className="text-[11px] text-muted-foreground
                               tracking-wide font-medium">
                enable sound to listen
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicVinylTile;