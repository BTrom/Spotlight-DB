<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
=======
import React from 'react';
>>>>>>> origin/main

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
<<<<<<< HEAD
    title?: string; // Added game title to support searching
=======
>>>>>>> origin/main
    categories?: Category[];
    cover_image?: string;
  };
}

<<<<<<< HEAD
=======
// const reports = [
//   {
//     id: 1,
//     title: "Starfield: The Galactic Consensus",
//     genre: "RPG",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpEEFoHho9yLBg0VT801Mk3Tuvx-FIezjWy1uy90-mFV6fLOYBDB5N2q5wF5QiXRS4mTi9ToZT9UkrKLoyF2W9VnR8agrFLHSyzadAIvkI0sxHqk4IBfkyed0ASB0s_gzsxntDZWy6APP0NGnfdJ03FrElfEhTndUF5hEDwTL9t2xC9J3GMx_FWdDU8ms3rPL-lSAQQS1Y4ItPmA8Nyx2GOPptAxDeODONfkP5AYLZF_73oj85THvNvVyhPa8wllBuaAbpUsdajqnn",
//     tag: "New Analysis",
//     tagColor: "bg-primary",
//     tagShadow: "shadow-neon-purple",
//     textColor: "text-primary",
//     hoverBorder: "hover:border-primary/50",
//     hoverShadow: "hover:shadow-neon-purple/20",
//     hoverText: "group-hover:text-primary",
//     gradientFrom: "from-primary/5",
//     description: "Comprehensive analysis of 24k user reviews suggests deep mechanics but uneven pacing. Exploration remains a divisive but visually stunning core loop.",
//     sentiment: "Highly Positive",
//     SentimentIcon: Smile,
//     sentimentColor: "text-accent-green",
//     timeAgo: "2h ago"
//   },
//   {
//     id: 2,
//     title: "The Finals: Destruction Evolved",
//     genre: "Shooter",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3qyRdFuqZS529eJhjI64K7PCYfAUsFydXnrPccGXFsHHoIUfVk5avo72ZnAzgAZci4saQoUAxd0ANPPOFo5b710CBXqwlMFek-wT9amNmom9NqXhR6t8hU5wiT1FhwjC_HcIiPHj2_nHMwzXUTExatQJCHu4iY8zz1higERwTdbxq-s1q7WAp_XQcsqMjpswXbvqaGRY_Glyu0eeSRGmQpKH4Gwb7hof2LnLG49paBVnmsp3Rv-4zd47AfNMvQ12ekGask62BOdKS",
//     tag: "Trending",
//     tagColor: "bg-secondary",
//     tagShadow: "shadow-neon-blue",
//     textColor: "text-secondary",
//     hoverBorder: "hover:border-secondary/50",
//     hoverShadow: "hover:shadow-neon-blue/20",
//     hoverText: "group-hover:text-secondary",
//     gradientFrom: "from-secondary/5",
//     description: "Destruction physics are reshaping the competitive meta. Player retention is high, though balancing updates for heavy classes are requested frequently.",
//     sentiment: "Mostly Positive",
//     SentimentIcon: Smile,
//     sentimentColor: "text-secondary",
//     timeAgo: "5h ago"
//   },
//   {
//     id: 3,
//     title: "Cities Skylines II: Performance Audit",
//     genre: "Strategy",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5RDkFBKoA0-W3Vd1kVo2XLTYsloRN-J01xpE5k5sdRjPL1gLLlT_mfgutgax9f2BM4odbA-2K2gEcNV1zDNSDVTmMYpyCa1pRr7zgXol48o0e0tgy8U48s8suWoweEjwhNMP_zEqiArgLNJ-XuhdWxDsk6ZYq3BO0SLlAR28EcgOnq4toW2fisOOJg_VxLttt2UVv3A6eiMsqL7yOuBhvap1CoaBbToP2J8C9pGQrTyu39RbbEWHSedb9isYJPcSqGon9XnTocW8p",
//     tag: "Archived",
//     tagColor: "bg-white/50",
//     tagShadow: "",
//     textColor: "text-text-secondary",
//     hoverBorder: "hover:border-primary/50",
//     hoverShadow: "hover:shadow-neon-purple/20",
//     hoverText: "group-hover:text-primary",
//     gradientFrom: "from-primary/5",
//     description: "Launch technical issues overshadow gameplay depth. AI sentiment flags significant frustration regarding optimization, despite praise for new road tools.",
//     sentiment: "Mixed",
//     SentimentIcon: Frown,
//     sentimentColor: "text-orange-500",
//     timeAgo: "1d ago"
//   },
//   {
//     id: 4,
//     title: "Cyberpunk 2077: Redemption Arc",
//     genre: "Action",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEQSBdt6HFdTUtenEphbPISUxMUh0H_WI-UKq0difAWuQUGW2UNlxEL7COlJ04tGu-Kqn7NMVmumM0tfHddfNT_AbzSgJzfaLH09gcUZeVPm4uHjVpsZMjW1I8Ay5llqftYs2ICI_y8bHDGPF-1E6ZSW61Pr1advaEt7OWsphiClegT7Gqslp1nT5fm5A4_oAeOcVBLZ21pX1UV0MWB2lGCULKtvdznst3pSHZ1Cm3_a4d-Cg67_VTivRDMRaztI0Uvt3klvyChEZl",
//     tag: "Update 2.0",
//     tagColor: "bg-secondary",
//     tagShadow: "shadow-neon-blue",
//     textColor: "text-secondary",
//     hoverBorder: "hover:border-secondary/50",
//     hoverShadow: "hover:shadow-neon-blue/20",
//     hoverText: "group-hover:text-secondary",
//     gradientFrom: "from-secondary/5",
//     description: "The Phantom Liberty expansion combined with Update 2.0 has shifted community sentiment to overwhelmingly positive. Narrative depth is peaking.",
//     sentiment: "Overwhelmingly Positive",
//     SentimentIcon: Laugh,
//     sentimentColor: "text-accent-green",
//     timeAgo: "2d ago"
//   },
//   {
//     id: 5,
//     title: "Alan Wake 2: Narrative Spiral",
//     genre: "Horror",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAOzhMUAlq4DO-lxM4gEiH_DLFiLPBgbGlT2LdH67ynRniatOKwa8WM2b60D9VAJjHioiltBdRhMuo1TCgJOqxTkDYBvu8oK5aaxhSmwZRXFUpgKzcuKqEUAJ_IzepjHqsD8iCo7HusVMicXVrL4aOAbCr21YmzCTzvprL12JRWPczT4I_7nGATu9DL72o3Ef-93zEiM4Wsq23DOp5G7yIEFSIvIcbTYKua5JFBuo8GxHfSqhr4oUOl7kk_tpdMkKoKi1Z_BzQMWu_",
//     tag: "Deep Dive",
//     tagColor: "bg-primary",
//     tagShadow: "shadow-neon-purple",
//     textColor: "text-primary",
//     hoverBorder: "hover:border-primary/50",
//     hoverShadow: "hover:shadow-neon-purple/20",
//     hoverText: "group-hover:text-primary",
//     gradientFrom: "from-primary/5",
//     description: "A masterclass in atmosphere. AI summary highlights the \"Mind Place\" mechanic as innovative, though combat variety receives minor criticism.",
//     sentiment: "Very Positive",
//     SentimentIcon: Smile,
//     sentimentColor: "text-accent-green",
//     timeAgo: "3d ago"
//   },
//   {
//     id: 6,
//     title: "Tekken 8: Aggression Reborn",
//     genre: "Fighting",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc-fVUxKfMm56CIfC1cN4MLLcRBsSwe2ujkSToyuLSwSL_6xQAo_FtFZslqPBC2FK7EsYASdxWy3yWfKEt9q2R51Cfnnb55HqPPPBjBrsUks316LBdXFWfRZVH2s8kZWnKTE-QmT7zHfJ98zopXzHhQ_UEtBF18LvZ4uJf_1zXg8Kx-j8--bm-QojTmYw2vP03bIwlXYk3fS_pS6vqB47cFbGGJiTORvN0EO6UvRa5V-7mWOlXbreEKOO8rFJSeWhJgErGLyH1lK-f",
//     tag: "Community",
//     tagColor: "bg-secondary",
//     tagShadow: "shadow-neon-blue",
//     textColor: "text-secondary",
//     hoverBorder: "hover:border-secondary/50",
//     hoverShadow: "hover:shadow-neon-blue/20",
//     hoverText: "group-hover:text-secondary",
//     gradientFrom: "from-secondary/5",
//     description: "The new Heat system promotes aggressive playstyles that veterans love. Netcode improvements are consistently praised in recent server tests.",
//     sentiment: "Positive",
//     SentimentIcon: Smile,
//     sentimentColor: "text-accent-green",
//     timeAgo: "4d ago"
//   }
// ];

>>>>>>> origin/main
function getTimeSince(dateString: string) {
  const postDate = new Date(dateString);
  const now = new Date();
  const diffHours = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60));
  
  if (diffHours < 1) return 'JUST NOW';
  if (diffHours < 24) return `${diffHours}H AGO`;
  return `${Math.floor(diffHours / 24)}D AGO`;
}

<<<<<<< HEAD
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

=======
export default function BlogHub({ posts }: { posts: Post[] }) {
>>>>>>> origin/main
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
<<<<<<< HEAD
                placeholder="Filter by Game or Genre..." 
                type="text"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="px-3 text-text-secondary hover:text-white transition-colors">
                <Search size={16} />
=======
                placeholder="Filter by Genre or Title..." 
                type="text"
              />
              <button className="px-3 text-text-secondary hover:text-white transition-colors">
                <SlidersHorizontal size={16} />
>>>>>>> origin/main
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

<<<<<<< HEAD
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
=======
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {posts.map((post) => (
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
              <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-6 font-light border-l border-white/10 pl-3">
                {post.content.replace(/<[^>]*>?/gm, '') /* Strip basic HTML tags if any */}
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

      {/* Pagination Block (Can be linked dynamically later) */}
      <div className="flex justify-center mt-8">
        <nav className="flex items-center gap-2">
          <button className="size-10 flex items-center justify-center rounded border border-surface-border bg-surface-dark text-text-secondary hover:text-white hover:border-primary/50 transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button className="size-10 flex items-center justify-center rounded border border-primary text-primary bg-primary/10 font-bold shadow-neon-purple">
            1
          </button>
          <button className="size-10 flex items-center justify-center rounded border border-surface-border bg-surface-dark text-text-secondary hover:text-white hover:border-primary/50 transition-colors">
            <ChevronRight size={16} />
          </button>
        </nav>
      </div>
>>>>>>> origin/main
    </>
  );
}