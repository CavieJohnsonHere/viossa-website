"use client";

import Button from "../components/button";

export default function Slideshow() {
  return (
    <div className="grid md:grid-cols-3">
      <div className="md:col-span-2 hidden md:block h-140 relative rounded-l-2xl bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Wikimedia_Hackathon_2025_Group_photo_from_drone.jpg/1920px-Wikimedia_Hackathon_2025_Group_photo_from_drone.jpg)] bg-cover">
        <div className="absolute w-1/2 h-full right-0 bg-gradient-to-r from-transparent to-viossa-200" />
      </div>
      <div className="bg-viossa-200 text-viossa-950 rounded-2xl md:rounded-l-none md:h-140">
        {/* Main content */}
        <div className="p-4 md:h-100">
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
          </p>
          <Button className="mt-2">Learn more</Button>
        </div>

        {/* Other stuff */}
        <div className="md:h-40">
          <div className="h-20 border-t border-black/5 p-2">
            <div className="text-2xl">Discord Hangout</div>
            <div>
              Casual ∙ Discord, June 5th
              <Button className="ml-2 text-base !px-2 !py-1">Learn more</Button>
            </div>
          </div>
          <div className="h-20 border-t border-black/5 p-2">
            <div className="text-2xl">Lorem Ipsum</div>
            <div>
              Casual ∙ Nepal, June 14th
              <Button className="ml-2 text-base !px-2 !py-1">Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
