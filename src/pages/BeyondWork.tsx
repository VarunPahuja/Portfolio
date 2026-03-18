import { motion } from "framer-motion";
import { useAltName } from "@/hooks/use-alt-name";

const topArtists = [
  "bleachers", "geese", "blood orange",
  "asap rocky", "tyler the creator", "radiohead",
  "pink floyd", "mr and mrs pahuja"
];

const topMovies = [
  { title: "In Bruges", poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/vz3Vd6nfq9YZrVvyYx5RHFaYKV3.jpg" },
  { title: "GoodFellas", poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg" },
  { title: "Past Lives", poster: "https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg" },
  { title: "Fantastic Mr. Fox", poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/euZyZb6iGreujYKrGyZHRddhUYh.jpg" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const BeyondWork = () => {
  const { isAltName } = useAltName();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="px-5 pt-20 sm:pt-28 pb-32 max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-4xl font-bold font-heading mb-2">
            {isAltName ? "Side Quests" : "Beyond Work"}
          </h1>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-16">

          {/* 1. MORE ABOUT ME */}
          <motion.section variants={item}>
            <h2 className="text-sm font-semibold tracking-wider text-foreground mb-6">
              more about me
            </h2>
            <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-muted-foreground">
              <p>
                I am Varun; I grew up in Bhilai, Chhattisgarh with a family full of overachieving doctors (they weren’t exactly thrilled when I went the other way).
              </p>
              <p>
                I grew up traveling with my family, and it remains one of the best times of the year for me. I'm really into movies and music.
              </p>
              <p>
                I enjoy being active, going to the gym, or playing some sports.
              </p>
              <p>
                Recently I've been getting into specialty coffee, dialing things in, and obsessing over small details.
              </p>
              <p>
                If any of this overlaps, I would probably enjoy talking.
              </p>
            </div>
          </motion.section>

          {/* 2. MY LETTERBOXD TOP 4 */}
          <motion.section variants={item}>
            <h2 className="text-sm font-semibold tracking-wider text-foreground mb-6">
              my letterboxd top 4:
            </h2>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {topMovies.map((m) => (
                <div key={m.title} className="aspect-[2/3] bg-muted rounded-md overflow-hidden bg-white/5">
                  <img
                    src={m.poster}
                    alt={m.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.section>

          {/* 3. MOVIES */}
          <motion.section variants={item}>
            <a
              href="https://letterboxd.com/vann1508/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[15px] text-muted-foreground hover:text-foreground transition-colors group"
            >
              View more on Letterboxd
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.section>

          {/* 4. ARTISTS I LISTEN TO */}
          <motion.section variants={item}>
            <h2 className="text-sm font-semibold tracking-wider text-foreground mb-6">
              people i listen to
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 text-[15px] text-muted-foreground">
              {topArtists.map((artist) => (
                <li key={artist}>{artist}</li>
              ))}
            </ul>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
};

export default BeyondWork;
