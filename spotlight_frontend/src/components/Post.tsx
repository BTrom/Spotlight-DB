import React from 'react';

interface Category {
  id: number;
  name: string;
}

interface PlayerCount {
  id: number;
  timestamp: Date;
  player_count: number;
}

interface Review {
  id: number;
  documentId: string;
  score: number;
}

interface Game {
  title: string;
  cover_image?: string;
  categories?: Category[];
  reviews?: Review[];
  player_count_history?: PlayerCount[];
}

interface PostProps {
  post: {
    title: string;
    content: string;
    createdAt: string;
    game?: Game;
  };
  htmlContent: string;
}

// Calculates read time assuming an average of 200 words per minute 
function calculateReadTime(text: string): number {
  if (!text) return 1;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

// Helper to extract just the latest number safely
function getLatestCCU(history?: PlayerCount[]) {
  if (!history || history.length === 0) return 0;
  return Number(history[history.length - 1].player_count);
}

function getReviewStats(reviews?: Review[]) {
  if (!reviews || reviews.length === 0) return { count: 0 };
  
  return { count: reviews.length };
}

export default function Post({ post, htmlContent }: PostProps) {
  const readTime = calculateReadTime(post.content);
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });
  
  return (
    <article className="flex flex-col w-full">
      <div className="relative w-full h-[60vh] min-h-[550px] overflow-hidden group">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('${post.game?.cover_image || "/fallback-cyberpunk-bg.jpg"}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-background-dark/30 z-10"></div>
        <div className="relative z-20 h-full max-w-[1200px] mx-auto px-6 lg:px-10 flex items-end pb-12">
          <div className="glass-panel p-8 md:p-10 rounded-lg w-full border-l-4 border-l-primary shadow-neon-purple/20 flex flex-col md:flex-row gap-8 items-end md:items-center">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-2 py-1 bg-primary/20 text-primary border border-primary/40 text-[10px] font-bold uppercase tracking-widest rounded-sm">AI Analysis</span>
                <span className="px-2 py-1 bg-white/10 text-white border border-white/20 text-[10px] font-bold uppercase tracking-widest rounded-sm">{post.game?.categories?.[0]?.name || "UPDATE"}</span>
                <span className="text-text-secondary text-[10px] font-mono uppercase flex items-center gap-1 ml-auto md:ml-0">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> {readTime} min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                { post.title }
              </h1>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-surface-border flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-secondary">smart_toy</span>
                </div>
                <div>
                  <div className="text-white text-sm font-bold uppercase tracking-wide">Spotlight Agent V4</div>
                  <div className="text-text-secondary text-xs font-mono">Generated: {formattedDate}</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block shrink-0 relative group/cover">
              <div className="relative w-36 lg:w-44 aspect-[2/3] rounded-sm overflow-hidden border border-white/10 shadow-neon-blue transition-all duration-300 transform group-hover/cover:-translate-y-2">
                <img alt={`${post.game?.title} Cover`} className="object-cover w-full h-full" src={post.game?.cover_image || "/fallback-cyberpunk-bg.jpg"} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-surface-border bg-surface-dark/95 backdrop-blur z-20 sticky top-0 shadow-lg">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-4">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 lg:gap-12">
            <div className="flex items-center gap-4 flex-1 min-w-[200px]">
              <div className="size-10 rounded bg-surface-dark border border-surface-border flex items-center justify-center text-secondary shadow-neon-blue">
                <span className="material-symbols-outlined">group</span>
              </div>
              <div>
                <div className="text-[10px] text-text-secondary uppercase tracking-widest mb-0.5">Live Players</div>
                <div className="text-xl font-bold text-white tabular-nums">{getLatestCCU(post.game?.player_count_history).toLocaleString()} </div>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-1 min-w-[200px]">
              <div className="size-10 rounded bg-surface-dark border border-surface-border flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">dataset</span>
              </div>
              <div>
                <div className="text-[10px] text-text-secondary uppercase tracking-widest mb-0.5">Reviews Analyzed</div>
                <div className="text-xl font-bold text-white tabular-nums">{getReviewStats(post.game?.reviews).count}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 space-y-8">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-b border-surface-border pb-2">Contents</h4>
              <ul className="space-y-3 text-sm text-text-secondary font-mono">
                <li><a className="hover:text-secondary transition-colors flex items-center gap-2 group" href="#verdict">
                  <span className="size-1.5 bg-surface-border group-hover:bg-secondary rounded-full transition-colors"></span> Community Verdict
                </a></li>
                <li><a className="hover:text-secondary transition-colors flex items-center gap-2 group" href="#pros-cons">
                  <span className="size-1.5 bg-surface-border group-hover:bg-secondary rounded-full transition-colors"></span> Pros &amp; Cons
                </a></li>
                <li><a className="hover:text-secondary transition-colors flex items-center gap-2 group" href="#breakdown">
                  <span className="size-1.5 bg-surface-border group-hover:bg-secondary rounded-full transition-colors"></span> Detailed Breakdown
                </a></li>
                <li><a className="hover:text-secondary transition-colors flex items-center gap-2 group" href="#data">
                  <span className="size-1.5 bg-surface-border group-hover:bg-secondary rounded-full transition-colors"></span> Data Visuals
                </a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-b border-surface-border pb-2">Share</h4>
              <div className="flex gap-2">
                <button className="size-8 flex items-center justify-center border border-surface-border rounded hover:bg-white/5 hover:border-white/20 transition-all text-text-secondary hover:text-white cursor-pointer">
                  <span className="material-symbols-outlined text-sm">share</span>
                </button>
                <button className="size-8 flex items-center justify-center border border-surface-border rounded hover:bg-white/5 hover:border-white/20 transition-all text-text-secondary hover:text-white cursor-pointer">
                  <span className="material-symbols-outlined text-sm">link</span>
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-span-1 lg:col-span-9 article-text">

          {/* Inject Parsed HTML */}
          {/* Note: Using prose prose-invert ensures Tailwind styles the raw HTML properly */}
          <div 
            className="prose prose-invert prose-p:text-text-secondary prose-headings:text-white prose-a:text-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* <p className="text-lg lg:text-xl font-light text-text-secondary mb-10 leading-relaxed border-l-2 border-primary pl-6">
            "A sprawling universe that demands patience but rewards curiosity. The AI consensus indicates a highly polarized yet deeply engaged playerbase."
          </p>
          <div className="mb-12" id="verdict">
            <h3 className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">forum</span>
              The Community Verdict
            </h3>
            <p>
              Analyzing over 24,000 user reviews from Steam, Metacritic, and Xbox verified players, our AI model has synthesized a clear narrative. <span className="text-secondary">Starfield</span> is not the seamless space simulator many anticipated, but rather a deeply fragmented RPG that shines in its granular moments.
            </p>
            <p>
              The sentiment curve shows a distinct "U-shape" pattern. Players often report initial disappointment with the <span className="text-white border-b border-primary/50">loading screens and segmented exploration</span>, followed by a surge in positive sentiment after the 12-hour mark when faction questlines deepen.
            </p>
          </div>
          <div className="my-12 p-6 border border-surface-border bg-surface-dark/50 rounded-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            <div className="relative z-10">
              <h4 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4 flex justify-between">
                <span>Sentiment Over Time (First 48h Gameplay)</span>
                <span className="text-primary flex items-center gap-1"><span className="size-2 bg-primary rounded-full"></span> Positive Trend</span>
              </h4>
              <div className="h-64 w-full">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                  <defs>
                    <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3"></stop>
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0,25 Q10,35 20,30 T40,25 T60,15 T80,10 T100,5 V50 H0 Z" fill="url(#chartFill)"></path>
                  <path className="drop-shadow-[0_0_4px_rgba(139,92,246,0.8)]" d="M0,25 Q10,35 20,30 T40,25 T60,15 T80,10 T100,5" fill="none" stroke="#8b5cf6" strokeLinecap="round" strokeWidth="1"></path>
                  <line stroke="#333" strokeDasharray="2,2" strokeWidth="0.2" x1="0" x2="100" y1="10" y2="10"></line>
                  <line stroke="#333" strokeDasharray="2,2" strokeWidth="0.2" x1="0" x2="100" y1="25" y2="25"></line>
                  <line stroke="#333" strokeDasharray="2,2" strokeWidth="0.2" x1="0" x2="100" y1="40" y2="40"></line>
                </svg>
                <div className="flex justify-between text-[10px] text-text-secondary font-mono mt-2">
                  <span>0h</span>
                  <span>12h</span>
                  <span>24h</span>
                  <span>48h+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12" id="pros-cons">
            <h3 className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">thumbs_up_down</span>
              Top Pros &amp; Cons
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="glass-panel p-6 rounded-lg border-t-4 border-t-accent-green">
                <h4 className="text-accent-green font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">add_circle</span> Strengths
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="material-symbols-outlined text-accent-green text-sm mt-0.5">check</span>
                    Ship customization remains the "best in class" for the genre.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="material-symbols-outlined text-accent-green text-sm mt-0.5">check</span>
                    Faction storylines (Vanguard, Crimson Fleet) are exceptionally written.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="material-symbols-outlined text-accent-green text-sm mt-0.5">check</span>
                    Visual fidelity in interiors and lighting is stunning.
                  </li>
                </ul>
              </div>
              <div className="glass-panel p-6 rounded-lg border-t-4 border-t-red-500">
                <h4 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">remove_circle</span> Weaknesses
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">close</span>
                    Excessive loading screens break immersion frequently.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">close</span>
                    Procedural planets often feel empty and repetitive.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">close</span>
                    Map system (prior to updates) was heavily criticized.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-12" id="breakdown">
            <h3 className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">analytics</span>
              Detailed Breakdown
            </h3>
            <p>
              The <strong className="text-secondary">Combat Loop</strong> has received mixed but generally positive feedback. 65% of reviews mention "gunplay" as a significant improvement over previous Bethesda titles. The boost-pack mechanics add a verticality that changes the flow of encounters.
            </p>
            <p>
              However, the <strong className="text-primary">Exploration</strong> metric suffers. Unlike Skyrim or Fallout 4, where "walking in a direction" yielded organic discovery, Starfield relies on menu-based travel. Our AI detected the phrase "fast travel simulator" in approximately 18% of negative reviews.
            </p>
            <blockquote className="my-8 pl-6 border-l-4 border-secondary italic text-lg text-white font-light bg-gradient-to-r from-surface-dark to-transparent py-4">
              "The game isn't about flying through space; it's about living in it. Once you accept the boundaries, the role-playing depth is limitless." — <span className="text-text-secondary not-italic text-sm font-mono">- User Review #88219 (Steam)</span>
            </blockquote>
          </div>
          <div className="bg-gradient-to-br from-surface-dark to-primary/5 border border-surface-border p-8 rounded-lg mt-12 text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 size-40 bg-primary/20 blur-[60px] rounded-full"></div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-2 relative z-10">AI Final Verdict</h3>
            <div className="text-5xl font-black text-white mb-4 relative z-10 drop-shadow-neon-purple">85<span className="text-2xl text-text-secondary font-medium">/100</span></div>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8 relative z-10">
              Starfield is a flawed masterpiece. It sacrifices seamless exploration for scale and modularity. For players who love systems, ship-building, and faction roleplay, it is essential. For those seeking a continuous open world, it may disappoint.
            </p>
            <button className="h-12 px-8 bg-primary hover:bg-primary-hover text-white text-sm font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-neon-purple rounded-sm relative z-10 cursor-pointer">
              View Full Analytics Report
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div> */}
        </div>
      </div>
    </article>
  );
}
