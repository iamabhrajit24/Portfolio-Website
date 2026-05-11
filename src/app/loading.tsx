export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-t-2 border-neon-blue animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-r-2 border-neon-purple animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="absolute inset-4 rounded-full border-b-2 border-neon-cyan animate-spin" style={{ animationDuration: '2s' }}></div>
      </div>
    </div>
  );
}
