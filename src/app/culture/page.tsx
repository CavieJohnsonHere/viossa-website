import Card from "./card";

export default function Culture() {
  return (
    <div className="lg:p-10 grid gap-10 lg:grid-cols-3 md:grid-cols-2">
      {/* We's like to have 6 or 12 of these so that the grid is perfect */}
      
      <Card
        title="Music"
        desc="Listen to music made by real artists in Viossa!"
        bgClassName="bg-gradient-to-tr from-fuchsia-500 to-cyan-500"
        textClassName="bg-gradient-to-r from-cyan-950 to-indigo-950"
        glow="var(--color-fuchsia-500)"
      />

      <Card
        title="Podcasts"
        desc="Fun and informative listening media, made in and for Viossa!"
        bgClassName="bg-gradient-to-br from-red-500 to-amber-500"
        textClassName="bg-gradient-to-r from-orange-950 to-yellow-950"
        glow="var(--color-yellow-500)"
      />

      <Card
        title="Poetry"
        desc="Read poetic pieces that flow and ryhme, (mostly) because of Viossa's versatility!"
        bgClassName="bg-gradient-to-bl from-emerald-500 to-lime-500"
        textClassName="bg-gradient-to-r from-cyan-950 to-indigo-950"
        glow="var(--color-fuchsia-500)"
      />
    </div>
  );
}
