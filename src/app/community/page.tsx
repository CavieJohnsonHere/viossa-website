import Infobox from "../components/infobox";
import Calendar from "./calendar";
import Slideshow from "./slideshow";

export default function Comumnity() {
  return (
    <div className="p-5 text-white">
      <Slideshow />
      <div className="my-5 mx-auto w-fit flex gap-5">
        <Infobox title="What are these?">
          Community events are opportunities to hang out with fellow
          Viossa-speaking friends.
        </Infobox>
        <Infobox title="What are these?">
          Community events are opportunities to hang out with fellow
          Viossa-speaking friends.
        </Infobox>
        <Infobox title="What are these?">
          Community events are opportunities to hang out with fellow
          Viossa-speaking friends.
        </Infobox>
      </div>
      <Calendar></Calendar>
    </div>
  );
}
