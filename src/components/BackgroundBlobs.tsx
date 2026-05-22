export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right blob */}
      <div className="absolute top-8 right-16 w-48 h-16 bg-[#C8C5E8] opacity-50 rounded-full blur-sm rotate-[-20deg]" />
      {/* Far right blob */}
      <div className="absolute top-32 right-4 w-36 h-12 bg-[#C8C5E8] opacity-40 rounded-full blur-sm rotate-[10deg]" />
      {/* Bottom right blob */}
      <div className="absolute bottom-16 right-24 w-44 h-14 bg-[#C8C5E8] opacity-40 rounded-full blur-sm rotate-[5deg]" />
      {/* Left side blob */}
      <div className="absolute top-1/2 left-4 w-32 h-10 bg-[#C8C5E8] opacity-30 rounded-full blur-sm rotate-[-10deg]" />
      {/* Bottom left blob */}
      <div className="absolute bottom-8 left-12 w-40 h-12 bg-[#C8C5E8] opacity-30 rounded-full blur-sm rotate-[8deg]" />
    </div>
  );
}