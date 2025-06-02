export default function Card({
  title,
  desc,
  bgClassName,
  textClassName,
  glow,
}: {
  title: string;
  desc: string;
  bgClassName: string;
  textClassName: string;
  glow: string;
}) {
  return (
    <div
      className={`${bgClassName} h-90 w-full rounded-2xl p-5`}
      style={{
        boxShadow:
          `0px 0px 45px 10px color-mix(in oklab, ${glow} 20%, transparent)`,
      }}
    >
      <div className={`font-black text-6xl w-fit ${textClassName} bg-clip-text text-transparent`}>
        {title}
      </div>
      <div className="mt-5 text-xl w-fit bg-gradient-to-r from-indigo-900 to-cyan-800 bg-clip-text text-transparent">
        {desc}
      </div>
    </div>
  );
}
