export default function Sidebar({ index = 0 }:{ index?: number }) {
  return (
    <aside className="hidden lg:flex w-20 flex-col items-center py-6 border-r border-surface-border bg-surface-dark/95 backdrop-blur-xl z-50 h-full">
      <div className="mb-10">
        <div className="size-10 text-primary flex items-center justify-center border border-primary/50 rounded bg-primary/10 shadow-neon-purple">
          <span className="material-symbols-outlined text-[24px]">stadia_controller</span>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-6 w-full">
        <a className={`${index === 0 ? 'nav-icon-active' : 'nav-icon'} h-12 w-full flex items-center justify-center group relative`} href="/" title="Dashboard">
          <span className="material-symbols-outlined text-[24px]">dashboard</span>
          <span className="absolute left-16 bg-surface-dark border border-surface-border px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Dashboard</span>
        </a>
        <a className={`${index === 1 ? 'nav-icon-active' : 'nav-icon'} h-12 w-full flex items-center justify-center group relative`} href="/blog" title="Trending">
          <span className="material-symbols-outlined text-[24px]">trending_up</span>
          <span className="absolute left-16 bg-surface-dark border border-surface-border px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Trending</span>
        </a>
        <a className={`${index === 2 ? 'nav-icon-active' : 'nav-icon'} h-12 w-full flex items-center justify-center group relative`} href="/blog" title="Community">
          <span className="material-symbols-outlined text-[24px]">forum</span>
          <span className="absolute left-16 bg-surface-dark border border-surface-border px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Community</span>
        </a>
      </nav>
      <div className="mt-auto">
        <button className="size-10 rounded-full bg-surface-border flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[20px] text-text-secondary">settings</span>
        </button>
      </div>
    </aside>
  );
}