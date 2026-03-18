import { motion } from "framer-motion";

const EMAIL_ADDRESS = "vpahuja1508@gmail.com";
const RESUME_URL = "https://drive.google.com/file/d/1sk6eBZPFN1LeUKKV1vu3_f-uA-myI_tm/view?usp=drive_link";

const links = [
  { name: "GitHub", href: "https://github.com/VarunPahuja" },
  { name: "LinkedIn", href: "https://linkedin.com/in/varunpahuja15" },
  { name: "LeetCode", href: "https://leetcode.com/u/varunpahuja/" },
  { name: "Email", href: `mailto:${EMAIL_ADDRESS}`, isMailto: true },
  { name: "View Resume", href: RESUME_URL },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center bg-background">
      <main className="relative z-10 px-6 pt-24 pb-32 w-full max-w-lg mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground font-heading">
            Get in Touch
          </h1>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center space-y-6 w-full"
        >
          {links.map((link) => (
            <motion.a
              key={link.name}
              variants={item}
              href={link.href}
              target={link.isMailto ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ x: 6 }}
              className="text-lg sm:text-xl font-medium text-muted-foreground hover:text-foreground transition-colors group flex items-center"
            >
              {link.name}
              <span className="ml-2 transition-transform group-hover:translate-x-1 opacity-70">→</span>
            </motion.a>
          ))}
        </motion.div>

      </main>
    </div>
  );
};

export default Contact;
