import Card from "./card";

export default function Culture() {
  return (
    <div className="p-10 grid gap-10 lg:grid-cols-3 md:grid-cols-2">
      {/* We's like to have 6 or 12 of these so that the grid is perfect */}
      
      <Card
        title="Music"
        desc="Listen to music made by real artists in Viossa!"
        bgClassName="bg-gradient-to-tr from-fuchsia-500 to-cyan-500"
        textClassName="bg-gradient-to-r from-indigo-900 to-cyan-800"
        glow="var(--color-fuchsia-500)"
      />

      <Card
        title="Music"
        desc="Listen to music made by real artists in Viossa!"
        bgClassName="bg-gradient-to-tr from-fuchsia-500 to-cyan-500"
        textClassName="bg-gradient-to-r from-indigo-900 to-cyan-800"
        glow="var(--color-fuchsia-500)"
      />

      <Card
        title="Music"
        desc="Listen to music made by real artists in Viossa!"
        bgClassName="bg-gradient-to-tr from-fuchsia-500 to-cyan-500"
        textClassName="bg-gradient-to-r from-indigo-900 to-cyan-800"
        glow="var(--color-fuchsia-500)"
      />
    </div>
  );
}
