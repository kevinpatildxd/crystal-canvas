const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Base */}
      <div className="absolute inset-0 bg-gradient-ocean" />
      
      {/* Animated Blobs */}
      <div
        className="liquid-blob w-[600px] h-[600px] -top-48 -left-48"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="liquid-blob w-[500px] h-[500px] top-1/4 -right-32"
        style={{ animationDelay: "-5s", background: "radial-gradient(circle, hsl(175 80% 45% / 0.4), transparent 70%)" }}
      />
      <div
        className="liquid-blob w-[400px] h-[400px] bottom-1/4 left-1/4"
        style={{ animationDelay: "-10s" }}
      />
      <div
        className="liquid-blob w-[450px] h-[450px] -bottom-32 right-1/4"
        style={{ animationDelay: "-15s", background: "radial-gradient(circle, hsl(185 70% 50% / 0.3), transparent 70%)" }}
      />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default LiquidBackground;
