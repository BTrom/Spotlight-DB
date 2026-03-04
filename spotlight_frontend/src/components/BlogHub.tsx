import React, { useState, useMemo } from 'react';

import {
  Gamepad2,
  LayoutDashboard,
  TrendingUp,
  MessageSquare,
  BarChart2,
  Settings,
  Menu,
  Search,
  User,
  Bot,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Smile,
  Frown,
  Laugh,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface Category {
  id: number;
  name: string;
}

interface Post {
  id: number;
  documentId: string;
  slug?: string;
  title: string;
  content: string;
  createdAt: string;
  game?: {
    title?: string; // Added game title to support searching
    categories?: Category[];
    cover_image?: string;
  };
}

function getTimeSince(dateString: string) {
  const postDate = new Date(dateString);
  const now = new Date();
  const diffHours = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60));
  
  if (diffHours < 1) return 'JUST NOW';
  if (diffHours < 24) return `${diffHours}H AGO`;
  return `${Math.floor(diffHours / 24)}D AGO`;
}

// You can adjust this number to change how many posts show per page
const POSTS_PER_PAGE = 3;

export default function BlogHub({ posts }: { posts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter posts based on real-time input
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    
    const query = searchQuery.toLowerCase();
    
    return posts.filter((post) => {
      // Check if the game title matches
      const gameTitleMatch = post.game?.title?.toLowerCase().includes(query) || false;
      
      // Check if any of the game's categories match
      const categoryMatch = post.game?.categories?.some(cat => 
        cat.name.toLowerCase().includes(query)
      ) || false;

      // Return true if either the game title or the category matches (NOT the post title)
      return gameTitleMatch || categoryMatch;
    });
  }, [posts, searchQuery]);

  // 2. Calculate pagination
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  
  // 3. Get the specific posts for the current page
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Always reset to page 1 when searching
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 pb-6 border-b border-surface-border">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Bot className="text-primary text-3xl" size={32} />
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Recent AI Reports</h1>
          </div>
          <p className="text-text-secondary font-mono text-sm max-w-2xl">
            &gt;&gt; ACCESSING NEURAL DATABASE. LATEST GENERATED INSIGHTS FROM 14,203 NEW REVIEWS.
          </p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative group w-full md:w-64">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 group-hover:opacity-75 blur transition duration-200"></div>
            <div className="relative flex items-center bg-surface-dark border border-surface-border rounded overflow-hidden">
              <input 
                className="bg-transparent border-none text-white text-xs font-mono w-full px-4 py-2.5 focus:ring-0 placeholder:text-text-secondary/50 outline-none" 
                placeholder="Filter by Game or Genre..." 
                type="text"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="px-3 text-text-secondary hover:text-white transition-colors">
                <Search size={16} />
              </button>
            </div>
          </div>
          <div className="flex border border-surface-border rounded bg-surface-dark/50">
            <button className="p-2 hover:bg-white/5 text-primary border-r border-surface-border transition-colors">
              <LayoutGrid size={18} />
            </button>
            <button className="p-2 hover:bg-white/5 text-text-secondary transition-colors">
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Show a message if search returns no results */}
      {currentPosts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-text-secondary font-mono border border-dashed border-surface-border rounded-lg bg-surface-dark/30">
          <Bot size={48} className="mb-4 opacity-50" />
          <p>&gt;&gt; NO RECORDS FOUND FOR "{searchQuery.toUpperCase()}"</p>
          <button 
            onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
            className="mt-4 text-primary hover:underline text-sm"
          >
            CLEAR FILTERS
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {currentPosts.map((post) => (
            <a 
              href={`/posts/${post.slug || post.documentId}`} 
              key={post.id} 
              className="group relative flex flex-col bg-surface-dark border border-surface-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-neon-purple/20 h-full cursor-pointer block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative h-56 overflow-hidden card-image-glow">
                <div className="absolute top-3 right-3 z-20 flex gap-2">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                    {post.game?.categories?.[0]?.name || "UPDATE"}
                  </span>
                </div>
                <img 
                  alt={`${post.title} Cover`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                  src={post.game?.cover_image || "/fallback-cyberpunk-bg.jpg"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-90"></div>
              </div>
              <div className="flex flex-col flex-1 p-6 relative z-10 -mt-12">
                <div className="flex items-center gap-2 mb-3">
                  <span className="size-2 bg-primary rounded-full shadow-neon-purple"></span>
                  <span className="text-xs font-mono text-primary uppercase tracking-widest">Analysis</span>
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                {/* Optional: Show Game Title if it's not the Post Title to make search clearer */}
                {post.game?.title && (
                   <p className="text-xs text-primary/80 uppercase mb-2 font-mono">
                     {post.game.title}
                   </p>
                )}
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-6 font-light border-l border-white/10 pl-3">
                  {post.content.replace(/<[^>]*>?/gm, '')}
                </p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-text-secondary uppercase tracking-wider mb-1">Status</span>
                    <span className="text-accent-green font-bold text-xs uppercase flex items-center gap-1">
                      <Smile size={14} /> Processed
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-text-secondary font-mono">{getTimeSince(post.createdAt)}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Dynamic Pagination Block */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="size-10 flex items-center justify-center rounded border border-surface-border bg-surface-dark text-text-secondary hover:text-white hover:border-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>
            
            {/* Generate page numbers dynamically */}
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNumber = idx + 1;
              return (
                <button 
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`size-10 flex items-center justify-center rounded border transition-colors ${
                    currentPage === pageNumber 
                      ? "border-primary text-primary bg-primary/10 font-bold shadow-neon-purple" 
                      : "border-surface-border bg-surface-dark text-text-secondary hover:text-white hover:border-primary/50"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="size-10 flex items-center justify-center rounded border border-surface-border bg-surface-dark text-text-secondary hover:text-white hover:border-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </nav>
        </div>
      )}
    </>
  );
}