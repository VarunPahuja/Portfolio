import { useEffect, useState } from "react";

const NOWCARD_USERNAME = "vvannavv";
const REFRESH_INTERVAL_MS = 60_000; // stay well under Last.fm's rate limit

const NowCardTile = () => {
  const [timestamp, setTimestamp] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setTimestamp(Date.now()), REFRESH_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="polaroid animate-float rounded-sm"
      style={{ "--rotation": "-0deg" } as React.CSSProperties}
    >
      <img
        src={`https://nowcard.store/api/card/${NOWCARD_USERNAME}?t=${timestamp}`}
        alt="Live now-playing card"
        width={700}
        height={337}
        className="block w-[260px] h-auto rounded-[2px]"
      />
    </div>
  );
};

export default NowCardTile;
