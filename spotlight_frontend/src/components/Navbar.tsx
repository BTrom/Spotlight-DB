export default function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
      <div className="flex items-center gap-4 lg:hidden">
        <span className="material-symbols-outlined text-text-secondary">menu</span>
        <div className="flex items-center gap-2 text-white">
          <span className="material-symbols-outlined text-primary">stadia_controller</span>
          <h2 className="text-white text-lg font-bold tracking-widest uppercase">Spotlight<span className="text-primary">DB</span></h2>
        </div>
      </div>
      <label className="hidden md:flex flex-col min-w-40 !h-10 w-96 ml-0 lg:ml-6">
        <div className="flex w-full flex-1 items-stretch border border-surface-border rounded-sm h-full group focus-within:border-primary transition-all bg-surface-dark/50 hover:bg-surface-dark">
          <div className="text-text-secondary flex border-none items-center justify-center pl-3">
            <span className="material-symbols-outlined text-[18px]">search</span>
          </div>
          <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-sm text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-text-secondary/50 px-3 text-xs font-medium tracking-wide" placeholder="SEARCH DATABASE // GAMES, TAGS..." defaultValue=""/>
        </div>
      </label>
      <div className="flex flex-1 justify-end gap-6 items-center">
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-[10px] text-text-secondary uppercase tracking-wider">Status</div>
            <div className="text-xs font-bold text-secondary flex items-center gap-1 justify-end">
              ONLINE <span className="size-1.5 rounded-full bg-secondary shadow-neon-blue animate-pulse"></span>
            </div>
          </div>
          <div className="h-8 w-px bg-surface-border hidden sm:block"></div>
          <button className="flex h-9 px-5 items-center justify-center rounded-sm bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 text-xs font-bold uppercase tracking-wide transition-colors tech-glow cursor-pointer">
            Connect Wallet
          </button>
          <div className="size-9 rounded bg-gradient-to-br from-primary to-secondary p-[1px]">
            <div className="h-full w-full bg-surface-dark rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">person</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}