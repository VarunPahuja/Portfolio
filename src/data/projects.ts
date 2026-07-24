export interface Project {
  id: string;
  title: string;
  hook: string;
  description: string;
  tags: string[];
  color: string;
  githubUrl?: string;
  longDescription?: string;
  liveUrl?: string;
  date?: string;
  features?: string[];
  impact?: string[];
  category?: "learning" | "main";
}

export const projects: Project[] = [
  {
    id: "moviematch",
    title: "MovieMatch",
    hook: "Real-time movie matching app where users swipe in shared rooms and get matches based on mutual preferences.",
    description: "Group movie nights stall on endless scrolling — MovieMatch syncs swipes across shared rooms in real time via Firestore so groups land on a pick in seconds.",
    tags: ["TypeScript", "React", "Firebase", "Firestore", "Tailwind", "shadcn/ui"],
    color: "from-blue-500/10 to-indigo-500/10",
    githubUrl: "https://github.com/VarunPahuja/MovieMatch",
  },
  {
    id: "exit-plan",
    title: "Exit Plan",
    hook: "AI immigration platform ranking countries for Indian graduates based on personalized, research-backed criteria.",
    description: "Choosing a country to emigrate to means wading through scattered visa policies and opinions — Exit Plan ranks 10 countries against research-informed criteria, weighted by what the user actually cares about.",
    tags: ["FastAPI", "React", "Supabase", "pgvector", "Gemini", "Scrapy"],
    color: "from-blue-500/10 to-cyan-500/10",
    githubUrl: "https://github.com/VarunPahuja/ExitPlan",
    longDescription: "Exit Plan started from a real decision problem — my sister weighing where to emigrate. It scores 10 countries against research-informed criteria (visa pathways, job market, cost of living, PR routes) and lets the user set their own priority weights at onboarding, producing a personalized, transparent ranking instead of a generic listicle. Deliberately not ML: 10 countries is too small a set to justify a learned model, there's no ground-truth label for 'best country,' and explainability matters when the decision is this consequential. A hand-built hybrid retrieval pipeline (pgvector similarity search plus keyword matching over 440+ policy chunks) grounds every answer in cited source text, built without a RAG framework by choice. A Scrapy pipeline monitors government portals for policy changes and fires email alerts, because stale immigration info is worse than no info at all.",
    date: "2026",
    features: [
      "Research-informed country scoring with user-set priority weights",
      "Hybrid retrieval (vector + keyword) over 440+ policy chunks, framework-free",
      "Automated policy-change detection with email alerts",
    ],
    impact: [
      "Deployed with real users",
      "Grounded, cited answers instead of generic emigration advice",
    ],
  },
  {
    id: "nowcard",
    title: "NowCard",
    hook: "Dynamic GitHub README card engine that showcases real-time music activity and developer context via live SVG rendering.",
    description: "Static GitHub badges go stale instantly — NowCard renders real-time Last.fm listening data into custom SVG cards server-side with zero client-side JS.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Clerk", "Last.fm API", "SVG"],
    color: "from-purple-500/10 to-pink-500/10",
    githubUrl: "https://github.com/VarunPahuja/NowCard",
    longDescription: "NowCard solves a common problem for developers who want their GitHub profile README to feel alive: static badges go stale immediately. It pulls real-time listening activity from the Last.fm API, authenticates users via Clerk, and renders fully custom SVG cards server-side so they can be embedded directly in a README with zero client-side JavaScript and no external render step for the viewer.",
    date: "2025",
    features: [
      "Server-side SVG generation with zero client overhead",
      "Real-time Last.fm integration for live music activity",
      "Clerk-based auth for per-user customizable cards",
    ],
    impact: [
      "Embeddable in any GitHub README via a single image tag",
      "Sub-second render times for dynamic cards",
    ],
  },
  {
    id: "stremtify",
    title: "stremtify",
    hook: "Tool to convert Spotify playlists into downloadable high-quality audio by scraping and verifying FLAC sources.",
    description: "Manually chasing lossless rips of Spotify tracks takes hours — stremtify automates search and verification across async scraping pipelines.",
    tags: ["Python", "Spotipy API", "aiohttp", "asyncio", "Streamlit"],
    color: "from-green-500/10 to-emerald-500/10",
    githubUrl: "https://github.com/VarunPahuja/stremtify",
  },
  {
    id: "nutricare",
    title: "NutriCare ",
    hook: "Nutrition and fitness platform combining a modern dashboard with a modular ML pipeline for health insights.",
    description: "Chronic illness patients struggle to track nutrition meaningfully — NutriCare's FastAPI/ML pipeline predicts daily macro targets from patient data (R² 0.70 on 5K clinical records) and surfaces them on a React dashboard.",
    tags: ["TypeScript", "React", "Vite", "Tailwind", "shadcn/ui", "Python", "FastAPI", "ML"],
    color: "from-orange-500/10 to-amber-500/10",
    githubUrl: "https://github.com/VarunPahuja/NutriCare",
  },
  {
    id: "scenemetric",
    title: "SceneMetric ",
    hook: "Computer vision project focused on extracting structured insights and metrics from visual scenes.",
    description: "Editors waste hours manually logging shot types — SceneMetric combines OpenCV signal extraction with a rule-based model to classify close/medium/long shots and generate a plain-English narrative breakdown of any scene.",
    tags: ["Python", "OpenCV", "NumPy"],
    color: "from-cyan-500/10 to-blue-500/10",
    githubUrl: "https://github.com/VarunPahuja/SceneMetric",
  },
  {
    id: "movie-sentiment",
    title: "Movie Review Sentiment",
    hook: "NLP pipeline for sentiment classification with added emotion detection and interpretability.",
    description: "Movie reviews carry more than positive/negative — this collaborative TF-IDF classifier (NB/LR/SVM, ~89% accuracy) adds emotion detection and keyword extraction for deeper insight.",
    tags: ["Python", "NLP", "Scikit-learn", "Transformers", "TF-IDF", "IMDb Dataset"],
    color: "from-sky-500/10 to-cyan-500/10",
    // TODO: replace with correct repo URL or collaboration note
    githubUrl: "",
  },
  {
    id: "flightdelay",
    title: "FlightDelay",
    hook: "Machine learning model to predict flight delays using historical flight data.",
    description: "Flight delays feel random to travelers but follow patterns — this Scikit-learn model achieves 92–95% accuracy identifying the key delay factors across historical flight data.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    color: "from-purple-500/10 to-fuchsia-500/10",
    githubUrl: "https://github.com/VarunPahuja/FlightDelay_PredictiveAnalysis",
  },
  {
    id: "hopon",
    title: "HopOn",
    hook: "Product-oriented platform for discovering and joining activities with authentication and real-time interaction.",
    description: "Discovering local activities means juggling scattered group chats — HopOn ships a full-stack MVP with JWT auth and MongoDB for a one-flow signup-to-join experience.",
    tags: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    color: "from-rose-500/10 to-pink-500/10",
    githubUrl: "https://github.com/VarunPahuja/HopOn",
  },
  {
    id: "spark25",
    title: "spark25 (hackathon)",
    hook: "AI-driven supply chain optimization platform built during a hackathon to forecast demand and reduce waste.",
    description: "Supply chains lose margin to overstock and shortages — spark25 forecasts demand with Scikit-learn and surfaces it on a live dashboard, built across a one-month hackathon sprint.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "TypeScript", "Dashboard UI"],
    color: "from-yellow-500/10 to-orange-500/10",
    githubUrl: "https://github.com/VarunPahuja/spark25",
    liveUrl: "https://www.youtube.com/watch?v=lpA3nzx4esY",
  },
  {
    id: "vanetuav",
    title: "VanetUAV (research)",
    hook: "Simulation-based research project on federated learning for intrusion detection in UAV and vehicular networks.",
    description: "Federated intrusion detection for UAV/vehicle networks breaks down on messy real-world data — research work testing model robustness under non-IID and adversarial conditions.",
    tags: ["Python", "Federated Learning", "ML", "Jupyter"],
    color: "from-teal-500/10 to-emerald-500/10",
    githubUrl: "https://github.com/VarunPahuja/VanetUAV",
  },
  {
    id: "ai-internship",
    title: "AI Internship Recommender (hackathon)",
    hook: "Basic system to recommend internships based on user skills and resume data.",
    description: "Manually matching resumes to internships doesn't scale — this NLP recommender uses TF-IDF and cosine similarity to match skills and resume text against listings, built in a hackathon sprint.",
    tags: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    color: "from-indigo-500/10 to-violet-500/10",
    githubUrl: "https://github.com/VarunPahuja/AI-Powered-Internship-Project-Recommender",
  },
  {
    id: "gapminder",
    title: "Gapminder",
    hook: "Interactive visualization of global development trends using dynamic charts.",
    description: "Global development trends get lost in spreadsheets — this Plotly dashboard turns decades of Gapminder data into an interactive, explorable visualization.",
    tags: ["Python", "Plotly", "Pandas"],
    color: "from-lime-500/10 to-green-500/10",
    githubUrl: "https://github.com/VarunPahuja/Gapminder-Data-Visualization-with-Plotly",
    category: "learning",
  },
  {
    id: "airbnb-nyc",
    title: "Airbnb NYC",
    hook: "Exploratory analysis of NYC Airbnb listings to study pricing and location patterns.",
    description: "NYC Airbnb pricing varies wildly by neighborhood — this Pandas EDA surfaces pricing patterns and location trends across the full listings dataset.",
    tags: ["Python", "Pandas", "Matplotlib"],
    color: "from-red-500/10 to-rose-500/10",
    githubUrl: "https://github.com/VarunPahuja/AirbnbNYCDataAnalysisProject",
    category: "learning",
  },
];

