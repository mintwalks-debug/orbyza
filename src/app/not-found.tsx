import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#FFFFFF] flex items-center justify-center overflow-hidden border-t-8 border-[#0047FF]">
      {/* Structural Minimalist Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0F172A 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="section-padding relative z-10 text-center">
        <div className="relative mb-12">
           <h1 className="text-[15rem] md:text-[25rem] font-black leading-none tracking-tighter text-[#0F172A]/5 select-none uppercase">
              404
           </h1>
           <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter">
                 Lost in <br /> <span className="text-[#0047FF]">The Core.</span>
              </h2>
           </div>
        </div>

        <p className="text-[#0047FF] text-xl md:text-2xl max-w-xl mx-auto mb-20 font-black uppercase tracking-widest leading-relaxed">
           This sector does not exist. Your request has been redirected to the central hub.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12">
           <Link href="/" className="btn-premium">
              Return to Hub
           </Link>
           <Link href="/services" className="text-sm font-black uppercase tracking-[0.4em] text-[#0047FF]/60 hover:text-[#0047FF] transition-all">
              Services Protocol →
           </Link>
        </div>
      </div>
    </div>
  );
}
