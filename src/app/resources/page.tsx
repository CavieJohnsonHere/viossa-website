import Link from "next/link";
import Infobox from "../components/infobox";
import Button from "../components/button";

export default function Resources() {
  return (
    <div className="p-5 text-white">
      <div className="w-full max-w-250 mx-auto">
        <div className="text-3xl font-bold text-center mb-2">
          Guides and Resources
        </div>

        <p className="text-center">This page provides resources that anyone can use to learn Viossa!</p>

        <div className="mx-auto w-fit pt-5 flex flex-col gap-5">
          <Infobox
            title="Discord!"
            image={{ href: "/discord.svg", alt: "Discord Icon" }}
          >
            This is where most of the action happens! Hop on in!
            <div className="mt-2">
              <a href="https://discord.gg/g3mG2gYjZD">
                <Button>Join the server</Button>
              </a>
            </div>
          </Infobox>

          <Infobox
            title="Discord!"
            image={{ href: "/discord.svg", alt: "Discord Icon", right: true }}
          >
            This is where most of the action happens! Hop on in!
            <div className="mt-2">
              <a href="https://discord.gg/g3mG2gYjZD">
                <Button>Join the server</Button>
              </a>
            </div>
          </Infobox>
        </div>
      </div>
    </div>
  );
}
