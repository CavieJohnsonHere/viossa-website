"use client";

import Button from "../components/button";

export default function Slideshow() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 h-140">
        <img
          className="w-full h-full rounded-l-2xl"
          src="/Viossa_Flag.png"
          alt=""
        />
      </div>
      <div className="bg-viossa-200 text-viossa-950 rounded-r-2xl h-140">
        {/* Main content */}
        <div className="p-4 h-100">
          <div className="text-4xl font-black">
            Join us for ConlangCon 2026!
          </div>
          <div className="mt-5 text-lg leading-8">
            <div>Convention ∙ London, UK</div>
            <div>May 23rd, 2025</div>
          </div>
          <p className="mt-2 text-xl">
            This convention is a geat place to meat our Viossa-speaking friends
            and speakers of other Conlangs! There's not enough space for all of
            us, so hurry up if you wanna register!
            <Button className="ml-2 text-base !px-2 !py-1">Learn more</Button>
          </p>
        </div>

        {/* Other stuff */}
        <div className="h-40">
          <div className="h-20 border-t border-black/5 p-2">
            <div className="text-2xl">Discord Hangout</div>
            <div>Casual ∙ Discord <Button className="ml-2 text-base !px-2 !py-1">Learn more</Button></div>
          </div>
          <div className="h-20 border-t border-black/5 p-2">
            <div className="text-2xl">Awards Ceremony</div>
          </div>
        </div>
      </div>
    </div>
  );
}
