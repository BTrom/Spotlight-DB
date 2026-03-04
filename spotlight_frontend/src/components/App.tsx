import React from 'react';

interface Category {
  id: number;
  documentId: string;
  name: string;
}

interface Company {
  id: number;
  documentId: string;
  name: string;
}

interface PlayerCount {
  id: number;
  timestamp: Date;
  player_count: number;
}

interface Game {
  id: number;
  documentId: string;
  title: string;
  cover_image: string;
  developers?: Company[];
  categories?: Category[];
  player_count_history?: PlayerCount[];
}

interface Review {
  id: number;
  documentId: string;
  score: number;
}

interface Post {
  id: number;
  documentId: string;
  title: string;
<<<<<<< HEAD
  slug?: string;
=======
>>>>>>> origin/main
  content: string;
  createdAt: string;
  game?: {
    categories?: Category[];
    reviews?: Review[];
    cover_image?: string;
  };
}

interface AppProps {
  heroGame: Game;
  trendingGames: Game[];
  latestPosts: Post[];
}

function HeroSection({ game }: { game: Game }) {
  if (!game) return <div>Loading...</div>;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-surface-border bg-surface-dark/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl shadow-black/50">
      <div className="relative overflow-hidden group min-h-[450px] lg:min-h-[550px] flex flex-col justify-between p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-surface-border">
<<<<<<< HEAD
        <img 
          className="absolute inset-0 w-full h-full z-0 opacity-50 mix-blend-luminosity hover:mix-blend-normal group-hover:opacity-60 transition-all duration-700 object-cover" 
          src={game.cover_image || "/fallback-cyberpunk-bg.jpg"} 
          alt={`Cover art for ${game.title}`}
        />
=======
        <img className="absolute inset-0 z-0 opacity-50 mix-blend-luminosity hover:mix-blend-normal group-hover:opacity-60 transition-all duration-700 object-cover" src={game.cover_image || "/fallback-cyberpunk-bg.jpg"} alt={ `Cover art for ${game.title}` }/>
>>>>>>> origin/main
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-background-dark/90 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary text-primary bg-primary/10 text-[10px] font-bold uppercase tracking-[0.2em] shadow-neon-purple rounded-sm">
            <span className="material-symbols-outlined text-[12px]">verified</span>
            <span>Game of the Day</span>
          </div>
          <h2 className="text-white text-6xl lg:text-9xl font-black leading-none tracking-tighter uppercase mb-4 opacity-5 pointer-events-none select-none" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', position: 'absolute', right: 0, top: 0, height: '100%' }}>{game.title.toUpperCase()}</h2>
          <h2 className="text-white text-5xl lg:text-7xl font-bold leading-tight tracking-tighter mb-4 drop-shadow-xl">{game.title.toUpperCase()}</h2>
          <div className="flex gap-4 mb-6">
            {game.categories?.map((category) => (
              <span key={category.id} className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-text-secondary">
                {category.name}
              </span>
            ))}
          </div>
          <p className="text-text-secondary text-sm lg:text-base font-mono max-w-md leading-relaxed mb-8 border-l-2 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">
            &gt;&gt; SYSTEM ANALYSIS: N/A<br />
            &gt;&gt; CONSENSUS: N/A
          </p>
        </div>
        <div className="relative z-10 flex flex-wrap gap-4">
          <button className="h-12 px-8 bg-primary hover:bg-primary-hover text-white text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-neon-purple group/btn">
            <span className="material-symbols-outlined text-[20px] group-hover/btn:animate-bounce">analytics</span>
            View Analytics
          </button>
          <button className="h-12 px-8 border border-white/20 hover:border-white text-white text-sm font-bold uppercase tracking-wider transition-colors bg-white/5 backdrop-blur-md hover:bg-white/10">
            AI Summary
          </button>
        </div>
      </div>
      <div className="relative bg-black/80 flex flex-col p-8 lg:p-12 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-8 z-10 relative">
          <div>
            <h3 className="text-secondary text-xs font-mono uppercase tracking-widest mb-1 flex items-center gap-2">
              <span className="size-2 bg-secondary rounded-full shadow-neon-blue"></span> Live Player Count
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl lg:text-6xl font-bold text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                {getLatestCCU(game.player_count_history).toLocaleString()}
              </span>
            </div>
            {/* <div className="text-xs text-accent-green font-mono mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12.5% increase (24h)
            </div> */}
          </div>
          {/* <div className="text-right">
            <h3 className="text-primary text-xs font-mono uppercase tracking-widest mb-1">AI Score</h3>
            <div className="text-4xl font-bold text-white tracking-tighter drop-shadow-md">8.5<span className="text-xl text-text-secondary">/10</span></div>
          </div> */}
        </div>
        <div className="flex-1 w-full relative min-h-[250px] border-l border-b border-surface-border/50">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <HeroPlayerCountGraph history={game.player_count_history} />
        </div>
        {/* <div className="flex justify-between text-[10px] text-text-secondary font-mono mt-3 uppercase tracking-wider">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span className="text-primary font-bold">Now</span>
        </div> */}
      </div>
    </section>
  );
}

function TrendingSection({ games }: { games: Game[] }) {
  return (
    <section>
      <div className="flex items-end justify-between mb-6 border-b border-surface-border pb-4">
        <h2 className="text-white text-xl font-bold uppercase tracking-wider flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary">trending_up</span>
          Trending Data
        </h2>
        <a className="text-text-secondary hover:text-primary text-xs font-mono uppercase tracking-widest transition-colors flex items-center gap-1" href="#">
          View Full Index <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {games.map((game, i) => (
          <div key={i} className="bg-surface-dark border border-surface-border p-5 hover:border-primary/50 transition-all group relative overflow-hidden rounded shadow-lg hover:shadow-neon-purple/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white text-sm font-bold truncate uppercase tracking-wide group-hover:text-primary transition-colors">{game.title}</h3>
                  <p className="text-text-secondary text-[10px] uppercase tracking-wider mt-1">{game.developers?.[0]?.name || "UNKNOWN STUDIO"}</p>
                </div>
                {/* <span className={`${trend.changeColor} px-1.5 py-0.5 rounded text-[10px] font-mono border`}>{trend.change}</span> */}
              </div>
              <div className="flex items-end justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-text-secondary text-[10px] uppercase mb-1">Peak (24h)</span>
                  <span className="text-white text-xl font-bold font-mono tracking-tight">{/* {trend.peak} */}
                    {getLatestCCU(game.player_count_history).toLocaleString()}
                  </span>
                </div>
                <div className="h-10 w-28">
                  <PlayerCountGraph history={game.player_count_history} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReportsSection({ posts }: { posts: Post[] }) {

  return (
    <section>
      <div className="flex items-end justify-between mb-6 border-b border-surface-border pb-4">
        <h2 className="text-white text-xl font-bold uppercase tracking-wider flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">smart_toy</span>
          Recent AI Reports
        </h2>
        <div className="flex gap-2">
          <button className="p-2 border border-surface-border hover:border-primary/50 rounded-sm transition-colors text-text-secondary hover:text-white">
            <span className="material-symbols-outlined text-sm">grid_view</span>
          </button>
          <button className="p-2 border border-surface-border hover:border-primary/50 rounded-sm transition-colors text-text-secondary hover:text-white bg-white/5">
            <span className="material-symbols-outlined text-sm">view_list</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <article key={i} className="flex flex-col md:flex-row glass-panel rounded-lg hover:border-primary/30 transition-all group relative overflow-hidden shadow-lg">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
<<<<<<< HEAD
            <div 
              className="w-full md:w-72 aspect-video md:aspect-auto shrink-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" 
              style={{ backgroundImage: `url(${post.game?.cover_image || "/fallback-cyberpunk-bg.jpg"})` }}
            >
=======
            <div className="w-full md:w-72 aspect-video md:aspect-auto shrink-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: post.game?.cover_image || "/fallback-cyberpunk-bg.jpg" }}>
>>>>>>> origin/main
              <div className="w-full h-full bg-black/40 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-sm"> {post.game?.categories?.[0]?.name || "UPDATE"} </span>
                  <div className="h-3 w-px bg-surface-border"></div>
                  <span className="text-text-secondary text-[10px] font-mono uppercase flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span> {getTimeSince(post.createdAt)}
                  </span>
                  <span className="text-text-secondary text-[10px] font-mono uppercase flex items-center gap-1">
<<<<<<< HEAD
                    <span className="material-symbols-outlined text-[12px]">dataset</span> Source: {getReviewStats(post.game?.reviews).count} comments
=======
                    <span className="material-symbols-outlined text-[12px]">dataset</span> Source: {getReviewStats(post.game?.reviews).count}
>>>>>>> origin/main
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {post.title}
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm translate-x-[-10px] group-hover:translate-x-0 duration-300">arrow_outward</span>
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-4xl">
<<<<<<< HEAD
                  {truncateText(post.content, 250)}
=======
                  {truncateText(post.content, 140)}
>>>>>>> origin/main
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                <div className="flex items-center gap-4 text-xs font-mono text-text-secondary">
<<<<<<< HEAD
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-accent-green">thumb_up</span> {getReviewStats(post.game?.reviews).positivePercent}% Positive</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-red-500">thumb_down</span> {100 - getReviewStats(post.game?.reviews).positivePercent}% Negative</span>
                </div>
                <a href={`/posts/${post.slug || post.documentId}`} className="text-secondary text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer group/link">
                  Read Report <span className="material-symbols-outlined text-[14px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
=======
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-accent-green">thumb_up</span> {getReviewStats(post.game?.reviews).positivePercent} Positive</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-red-500">thumb_down</span> {100 - getReviewStats(post.game?.reviews).positivePercent} Negative</span>
                </div>
                <span className="text-secondary text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer group/link">
                  Read Report <span className="material-symbols-outlined text-[14px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </span>
>>>>>>> origin/main
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// Helper to extract just the latest number safely
function getLatestCCU(history?: PlayerCount[]) {
  if (!history || history.length === 0) return 0;
  return Number(history[history.length - 1].player_count);
}

function PlayerCountGraph({ history }: { history?: PlayerCount[] }) {
  // Require at least 2 points to draw a line
  if (!history || history.length < 2) {
    return <div className="text-text-secondary text-xs h-full flex items-center">NO DATA</div>;
  }

<<<<<<< HEAD
  const previousEntries = history.slice(0, -1).slice(-48);
=======
  // Pluck off the final number, leaving the rest for the graph
  const previousEntries = history.slice(0, -1);
>>>>>>> origin/main
  const counts = previousEntries.map(h => Number(h.player_count));

  const max = Math.max(...counts, 1);
  const min = Math.min(...counts, 0);
  const range = max - min || 1;

  // Map points to a standard 50x20 viewBox
  const points = counts.map((count, index) => {
    const x = (index / (counts.length - 1 || 1)) * 50;
    const y = 20 - ((count - min) / range) * 20;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg className="w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 50 20">
      <polyline
        points={points}
        className="fill-none stroke-primary stroke-[1px]"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroPlayerCountGraph({ history }: { history?: PlayerCount[] }) {
  if (!history || history.length < 2) {
    return <div className="text-text-secondary h-full flex items-center justify-center font-mono text-sm">AWAITING DATA GATHERING</div>;
  }

<<<<<<< HEAD
  const previousEntries = history.slice(0, -1).slice(-128);
=======
  const previousEntries = history.slice(0, -1);
>>>>>>> origin/main
  const counts = previousEntries.map(h => Number(h.player_count));
  
  const max = Math.max(...counts, 1);
  const min = Math.min(...counts, 0);
  const range = max - min || 1;
  
  // Using a 100x40 viewBox for a wider aspect ratio suitable for the Hero section
  const points = counts.map((count, index) => {
    const x = (index / (counts.length - 1 || 1)) * 100;
    const y = 40 - ((count - min) / range) * 40; 
    return { x, y };
  });

  const lineData = points.map(p => `${p.x},${p.y}`).join(' L ');
  const linePath = `M ${lineData}`;
  
  // Close the path at the bottom corners (100,40 and 0,40) to create the fillable area
  const areaPath = `${linePath} L 100,40 L 0,40 Z`;

  return (
    <svg className="w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 100 40">
      <defs>
        <linearGradient id="hero-gradient" x1="0" x2="0" y1="0" y2="1">
          {/* Using currentColor so it inherits your primary theme color via CSS classes */}
          <stop offset="0%" className="text-primary" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" className="text-primary" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* The semi-transparent gradient fill */}
      <path d={areaPath} fill="url(#hero-gradient)" />
      
      {/* The solid top line */}
      <path d={linePath} className="fill-none stroke-primary stroke-[0.1px]" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getTimeSince(dateString: string) {
  const postDate = new Date(dateString);
  const now = new Date();
  const diffHours = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60));
  
  if (diffHours < 1) return 'JUST NOW';
  if (diffHours < 24) return `${diffHours}H AGO`;
  return `${Math.floor(diffHours / 24)}D AGO`;
}

function getReviewStats(reviews?: Review[]) {
  if (!reviews || reviews.length === 0) return { count: 0, positivePercent: 0 };
  
  const positiveReviews = reviews.filter(r => r.score >= 50).length;
  const positivePercent = Math.round((positiveReviews / reviews.length) * 100);
  
  return { count: reviews.length, positivePercent };
}

<<<<<<< HEAD
function truncateText(text: string, maxLength: number = 150) {
=======
function truncateText(text: string, maxLength: number = 120) {
>>>>>>> origin/main
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

export default function App({ heroGame, trendingGames, latestPosts }: AppProps) {
  return (
    <>
      <HeroSection game={heroGame} />
      <TrendingSection games={trendingGames} />
      <ReportsSection posts={latestPosts} />
    </>
  );
}
