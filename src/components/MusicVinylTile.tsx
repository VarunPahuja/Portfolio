import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useSound } from "@/hooks/use-sound";

interface MusicVinylTileProps {
  title: string;
  artist: string;
  src: string;
  coverGradient: string;
}

const MusicVinylTile = ({ title, artist, src, coverGradient }: MusicVinylTileProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { soundEnabled } = useSound();

  // Stop when global sound is off
  useEffect(() => {
    if (!soundEnabled && isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [soundEnabled, isPlaying]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggle = async () => {
    if (!soundEnabled) return;

    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.volume = 0.6;
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative w-36 h-36 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Album cover */}
      <motion.div
        className="absolute inset-0 rounded-lg overflow-hidden shadow-xl cursor-pointer z-10"
        style={{ background: coverGradient }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onPointerDown={(e) => e.stopPropagation()}
        onClick={toggle}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
          <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center mb-2 backdrop-blur-sm bg-black/20">
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </div>
          <p className="text-[10px] font-semibold tracking-wide uppercase opacity-70">{artist}</p>
        </div>
        {!soundEnabled && (
          <div className="absolute bottom-2 left-2 right-2 text-center">
            <span className="text-[9px] text-white/50 bg-black/30 px-2 py-0.5 rounded">Sound off</span>
          </div>
        )}
      </motion.div>

      {/* Vinyl disc - slides out when playing */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 50, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute top-2 left-2 w-32 h-32 z-0"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="w-full h-full rounded-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 border border-zinc-600 shadow-lg"
            >
              {/* Grooves */}
              <div className="absolute inset-3 rounded-full border border-zinc-600/30" />
              <div className="absolute inset-6 rounded-full border border-zinc-600/20" />
              <div className="absolute inset-9 rounded-full border border-zinc-600/30" />
              {/* Center label */}
              <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-zinc-900" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
          >
            <div className="px-2.5 py-1 bg-card/95 backdrop-blur-sm rounded-md shadow-md border border-border/50 text-[11px] text-card-foreground font-medium">
              {title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicVinylTile;
