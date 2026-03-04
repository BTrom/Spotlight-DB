import React from 'react';

export default function Contact() {
  return (
    <div className="bg-background-dark text-text-primary font-display antialiased overflow-hidden flex h-screen w-full">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-30"></div>
      
      {/* Sidebar */}
      <aside className="hidden lg:flex w-20 flex-col items-center py-6 border-r border-surface-border bg-surface-dark/95 backdrop-blur-xl z-50 h-full">
        <div className="mb-10">
          <div className="size-10 text-primary flex items-center justify-center border border-primary/50 rounded bg-primary/10 shadow-neon-purple">
            <span className="material-symbols-outlined text-[24px]">stadia_controller</span>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-6 w-full">
          <a className="nav-icon h-12 w-full flex items-center justify-center group relative" href="#" title="Dashboard">
            <span className="material-symbols-outlined text-[24px]">dashboard</span>
            <span className="absolute left-16 bg-surface-dark border border-surface-border px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Dashboard</span>
          </a>
          <a className="nav-icon h-12 w-full flex items-center justify-center group relative" href="#" title="Trending">
            <span className="material-symbols-outlined text-[24px]">trending_up</span>
            <span className="absolute left-16 bg-surface-dark border border-surface-border px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Trending</span>
          </a>
          <a className="nav-icon h-12 w-full flex items-center justify-center group relative" href="#" title="Community">
            <span className="material-symbols-outlined text-[24px]">forum</span>
            <span className="absolute left-16 bg-surface-dark border border-surface-border px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Community</span>
          </a>
          <a className="nav-icon h-12 w-full flex items-center justify-center group relative" href="#" title="Analytics">
            <span className="material-symbols-outlined text-[24px]">analytics</span>
            <span className="absolute left-16 bg-surface-dark border border-surface-border px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Analytics</span>
          </a>
          <a className="nav-icon-active h-12 w-full flex items-center justify-center group relative" href="#" title="Contact">
            <span className="material-symbols-outlined text-[24px]">mail</span>
            <span className="absolute left-16 bg-surface-dark border border-surface-border px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Contact</span>
          </a>
        </nav>
        <div className="mt-auto">
          <button className="size-10 rounded-full bg-surface-border flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[20px] text-text-secondary">settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="relative flex flex-1 flex-col h-full overflow-hidden z-10">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
          <div className="flex items-center gap-4 lg:hidden">
            <span className="material-symbols-outlined text-text-secondary">menu</span>
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">stadia_controller</span>
              <h2 className="text-white text-lg font-bold tracking-widest uppercase">Spotlight<span className="text-primary">DB</span></h2>
            </div>
          </div>
          
          <label className="hidden md:flex flex-col min-w-40 h-10 w-96 ml-0 lg:ml-6">
            <div className="flex w-full flex-1 items-stretch border border-surface-border rounded-sm h-full group focus-within:border-primary transition-all bg-surface-dark/50 hover:bg-surface-dark">
              <div className="text-text-secondary flex border-none items-center justify-center pl-3">
                <span className="material-symbols-outlined text-[18px]">search</span>
              </div>
              <input 
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-sm text-white focus:outline-none border-none bg-transparent h-full placeholder:text-text-secondary/50 px-3 text-xs font-medium tracking-wide" 
                placeholder="SEARCH DATABASE // GAMES, TAGS..." 
              />
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

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-10 scrollbar-hide relative">
          <div className="absolute inset-0 z-0 bg-cyber-gradient pointer-events-none"></div>
          
          <div className="flex flex-col max-w-[1200px] mx-auto w-full gap-10 relative z-10 h-full justify-center min-h-full">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center flex-1">
              
              {/* Left Column - Contact Info */}
              <section className="flex-1 w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-primary"></span>
                    Contact Us
                  </h2>
                  <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter leading-tight">
                    GET IN <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary animate-pulse">TOUCH</span>
                  </h1>
                  <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                    Have a question about our data analytics or API integration? Connect with the Spotlight DB team.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-dark/30 border border-transparent hover:border-primary/30 transition-all duration-300 group">
                    <div className="size-12 rounded-sm bg-surface-dark border border-surface-border flex items-center justify-center shrink-0 group-hover:shadow-neon-purple transition-shadow">
                      <span className="material-symbols-outlined text-primary">apartment</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-1">HQ Location</h3>
                      <p className="text-text-secondary text-sm font-mono">Sector 7G, Neo-Tokyo Tech Hub<br/>Level 42, Unit 8080</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-dark/30 border border-transparent hover:border-primary/30 transition-all duration-300 group">
                    <div className="size-12 rounded-sm bg-surface-dark border border-surface-border flex items-center justify-center shrink-0 group-hover:shadow-neon-blue transition-shadow">
                      <span className="material-symbols-outlined text-secondary">mail</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-1">Email Support</h3>
                      <p className="text-text-secondary text-sm font-mono hover:text-secondary transition-colors cursor-pointer">support@spotlightdb.ai</p>
                      <p className="text-text-secondary/50 text-xs mt-1">Response time: &lt; 2 hours</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-surface-border/50">
                  <h3 className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-4">Social Channels</h3>
                  <div className="flex gap-4">
                    <a className="size-10 rounded-sm bg-surface-dark border border-surface-border hover:border-primary hover:bg-primary/10 flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300 hover:shadow-neon-purple" href="#">
                      <span className="material-symbols-outlined">chat</span>
                    </a>
                    <a className="size-10 rounded-sm bg-surface-dark border border-surface-border hover:border-secondary hover:bg-secondary/10 flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300 hover:shadow-neon-blue" href="#">
                      <span className="material-symbols-outlined">flutter_dash</span>
                    </a>
                    <a className="size-10 rounded-sm bg-surface-dark border border-surface-border hover:border-primary hover:bg-primary/10 flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300 hover:shadow-neon-purple" href="#">
                      <span className="material-symbols-outlined">hub</span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Right Column - Form */}
              <section className="flex-1 w-full lg:w-1/2">
                <div className="glass-panel p-8 lg:p-10 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                    <span className="material-symbols-outlined text-8xl text-white">mark_email_unread</span>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl text-white font-bold uppercase tracking-wider mb-2">Send a Message</h3>
                    <p className="text-text-secondary text-sm mb-8 font-mono">Encrypted transmission channel open.</p>
                    
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1" htmlFor="email">Your Email ID</label>
                        <div className="relative group">
                          <span className="absolute left-4 top-3.5 text-text-secondary group-focus-within:text-primary transition-colors material-symbols-outlined text-[18px]">alternate_email</span>
                          <input className="input-cyber pl-12" id="email" placeholder="agent@example.com" type="email"/>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1" htmlFor="subject">Subject</label>
                        <div className="relative group">
                          <span className="absolute left-4 top-3.5 text-text-secondary group-focus-within:text-primary transition-colors material-symbols-outlined text-[18px]">label_important</span>
                          <select className="input-cyber pl-12 appearance-none text-text-secondary cursor-pointer">
                            <option>General Inquiry</option>
                            <option>API Access</option>
                            <option>Bug Report</option>
                            <option>Partnership</option>
                          </select>
                          <span className="absolute right-4 top-3.5 text-text-secondary pointer-events-none material-symbols-outlined text-[18px]">expand_more</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1" htmlFor="message">Message Data</label>
                        <div className="relative group">
                          <span className="absolute left-4 top-3.5 text-text-secondary group-focus-within:text-primary transition-colors material-symbols-outlined text-[18px]">notes</span>
                          <textarea className="input-cyber pl-12 min-h-[150px] resize-none" id="message" placeholder="Input your query here..."></textarea>
                        </div>
                      </div>
                      
                      <button className="w-full py-4 mt-4 bg-gradient-to-r from-primary to-blue-600 hover:to-secondary text-white font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-primary/25 hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group/btn cursor-pointer" type="button">
                        Transmit Message
                        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">send</span>
                      </button>
                    </form>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                </div>
              </section>
              
            </div>

            {/* Footer */}
            <footer className="border-t border-surface-border pt-10 pb-6 mt-auto relative z-10 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full px-6 lg:px-0">
                <div className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-primary text-[20px]">stadia_controller</span>
                  <h2 className="text-sm font-bold uppercase tracking-widest">Spotlight<span className="text-primary">DB</span></h2>
                </div>
                <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-text-secondary">
                  <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                  <a className="hover:text-primary transition-colors" href="#">Terms</a>
                  <a className="hover:text-primary transition-colors" href="#">API</a>
                  <a className="text-primary cursor-default" href="#">Contact</a>
                </div>
                <p className="text-[10px] text-text-secondary/50 font-mono">SYSTEM_VER_3.0.0 // SECURE CONNECTION</p>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}