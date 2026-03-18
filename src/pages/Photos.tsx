import { motion } from "framer-motion";
import { photos } from "@/data/photos";

const Photos = () => (
  <div className="min-h-screen relative bg-background">
    <main className="relative z-10 pt-4 pb-28">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-3 sm:grid-cols-4 gap-[2px]"
      >
        {photos.map((src, i) => (
          <motion.div
            key={`${src}-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.03 }}
            className="aspect-square overflow-hidden bg-muted"
          >
            <img
              src={src}
              alt={`Photo ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </main>
  </div>
);

export default Photos;
