export interface Project {
  id: string;
  title: string;
  hook: string;
  description: string;
  tags: string[];
  color: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "moviematch",
    title: "MovieMatch",
    hook: "Real-time movie matching app where users swipe in shared rooms and get matches based on mutual preferences.",
    description: "Focused on building a collaborative, low-friction way to decide what to watch with live sync and presence systems.",
    tags: ["TypeScript", "React", "Firebase", "Firestore", "Tailwind", "shadcn/ui"],
    color: "from-blue-500/10 to-indigo-500/10",
    github: "https://github.com/VarunPahuja/MovieMatch",
  },
  {
    id: "stremtify",
    title: "stremtify",
    hook: "Tool to convert Spotify playlists into downloadable high-quality audio by scraping and verifying FLAC sources.",
    description: "Automates a messy manual workflow using async pipelines and structured scraping.",
    tags: ["Python", "Spotipy API", "aiohttp", "asyncio", "Streamlit"],
    color: "from-green-500/10 to-emerald-500/10",
    github: "https://github.com/VarunPahuja/stremtify",
  },
  {
    id: "nutricare",
    title: "NutriCare (ongoing)",
    hook: "Nutrition and fitness platform combining a modern dashboard with a modular ML pipeline for health insights.",
    description: "Exploring how data-driven recommendations can simplify tracking and improve consistency.",
    tags: ["TypeScript", "React", "Vite", "Tailwind", "shadcn/ui", "Python", "FastAPI", "ML"],
    color: "from-orange-500/10 to-amber-500/10",
    github: "https://github.com/VarunPahuja/NutriCare",
  },
  {
    id: "scenemetric",
    title: "SceneMetric (ongoing)",
    hook: "Computer vision project focused on extracting structured insights and metrics from visual scenes.",
    description: "Currently exploring preprocessing pipelines and interpretable feature extraction.",
    tags: ["Python", "OpenCV", "NumPy"],
    color: "from-cyan-500/10 to-blue-500/10",
    github: "https://github.com/VarunPahuja/SceneMetric",
  },
  {
    id: "movie-sentiment",
    title: "Movie Review Sentiment",
    hook: "NLP pipeline for sentiment classification with added emotion detection and interpretability.",
    description: "Built a TF-IDF based sentiment classifier (~89% accuracy) using ML models (NB, LR, SVM).Extended with emotion detection and keyword extraction for deeper insight into predictions.",
    tags: ["Python", "NLP", "Scikit-learn", "Transformers", "TF-IDF", "IMDb Dataset"],
    color: "from-indigo-500/10 to-blue-500/10",
    github: "https://github.com/YugParekh/movie-review-sentiment",
  },
  {
    id: "flightdelay",
    title: "FlightDelay",
    hook: "Machine learning model to predict flight delays using historical flight data.",
    description: "Built to understand key factors affecting delays and evaluate predictive performance.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    color: "from-purple-500/10 to-fuchsia-500/10",
    github: "https://github.com/VarunPahuja/FlightDelay_PredictiveAnalysis",
  },
  {
    id: "hopon",
    title: "HopOn",
    hook: "Product-oriented platform for discovering and joining activities with authentication and real-time interaction.",
    description: "Built as an end-to-end MVP with a focus on clean user flows and deployment.",
    tags: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    color: "from-rose-500/10 to-pink-500/10",
    github: "https://github.com/VarunPahuja/HopOn",
  },
  {
    id: "spark25",
    title: "spark25 (hackathon)",
    hook: "AI-driven supply chain optimization platform built during a hackathon to forecast demand and reduce waste.",
    description: "Focused on rapid prototyping, ML integration, and building a usable dashboard under time constraints.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "TypeScript", "Dashboard UI"],
    color: "from-yellow-500/10 to-orange-500/10",
    github: "https://github.com/VarunPahuja/spark25",
  },
  {
    id: "vanetuav",
    title: "VanetUAV (research paper)(ongoing)",
    hook: "Simulation-based research project on federated learning for intrusion detection in UAV and vehicular networks.",
    description: "Explores robustness under non-IID data and adversarial conditions.",
    tags: ["Python", "Federated Learning", "ML", "Jupyter"],
    color: "from-teal-500/10 to-emerald-500/10",
    github: "https://github.com/VarunPahuja/VanetUAV",
  },
  {
    id: "ai-internship",
    title: "AI Internship Recommender (hackathon)",
    hook: "Basic system to recommend internships based on user skills and resume data.",
    description: "Early exploration into applying NLP and similarity-based matching.",
    tags: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    color: "from-indigo-500/10 to-violet-500/10",
    github: "https://github.com/VarunPahuja/AI-Powered-Internship-Project-Recommender",
  },
  {
    id: "gapminder",
    title: "Gapminder",
    hook: "Interactive visualization of global development trends using dynamic charts.",
    description: "Focused on understanding data storytelling and visual exploration.",
    tags: ["Python", "Plotly", "Pandas"],
    color: "from-lime-500/10 to-green-500/10",
    github: "https://github.com/VarunPahuja/Gapminder-Data-Visualization-with-Plotly",
  },
  {
    id: "airbnb-nyc",
    title: "Airbnb NYC",
    hook: "Exploratory analysis of NYC Airbnb listings to study pricing and location patterns.",
    description: "Used to build intuition around real-world datasets and cleaning workflows.",
    tags: ["Python", "Pandas", "Matplotlib"],
    color: "from-red-500/10 to-rose-500/10",
    github: "https://github.com/VarunPahuja/AirbnbNYCDataAnalysisProject",
  },
];

