import { motion } from "framer-motion";

const items = [
  "run a marathon",
  "build a product people actually use daily",
  "complete an ironman",
  "buy my parents a car",
  "ship something that scales to thousands of users",
  "work in new york for a while",
  "meet people who are building cooler things than me"
];

const BucketListTile = () => (
  <div className="p-1">
    <p className="text-sm font-bold text-foreground font-heading mb-4 lowercase tracking-wide">
      bucket list
    </p>
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          className="flex items-start"
        >
          <span className="text-[14px] leading-snug text-muted-foreground font-medium lowercase">
            • {item}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default BucketListTile;
