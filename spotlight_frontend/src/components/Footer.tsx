export default function Footer() {
  return (
    <footer className="border-t border-surface-border pt-10 pb-6 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white">
          <span className="material-symbols-outlined text-primary text-[20px]">stadia_controller</span>
          <h2 className="text-sm font-bold uppercase tracking-widest">Spotlight<span className="text-primary">DB</span></h2>
        </div>
        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-text-secondary">
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms</a>
          <a className="hover:text-primary transition-colors" href="#">API</a>
          <a className="hover:text-primary transition-colors" href="#">Contact</a>
        </div>
        <p className="text-[10px] text-text-secondary/50 font-mono">SYSTEM_VER_3.0.0 // FINAL MERGE</p>
      </div>
    </footer>
  );
}