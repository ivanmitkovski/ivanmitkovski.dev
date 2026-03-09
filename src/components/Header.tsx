export default function Header() {
  return (
    <header className="pt-3 sm:pt-4">
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/5 bg-black/30 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img
            src="/images/portfolio-logo.png"
            alt="Ivan Mitkovski logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex-shrink-0"
          />
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400">
              Portfolio of
            </span>
            <span className="text-sm sm:text-base font-semibold text-white truncate">
              Ivan Mitkovski
            </span>
          </div>
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-200 hover:bg-emerald-500/20 hover:border-emerald-400 transition-colors whitespace-nowrap"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
