import Image from "next/image";
import { Video } from "./ui/video";
import { Divider } from "./ui/divider";
import DropCap from "./ui/better-drop-cap";
import LuxCap from "./ui/lux-cap";

const MainBody = () => {

  return (
    <div className="text-[4.1vw]">
      <div className="bg-[url('/abstract-watercolor-frame.png')] bg-contain md:bg-center md:px-[20vw] p-4 pr-5 text-justify md:text-xl">
        <div className="md:content-start md:grid md:grid-cols-2">
          <div className="md:pr-5">
            <DropCap
              content="IN the flickering glow of their lanterns, Merc and Herc — two seasoned ghost hunters — found themselves staring up at the decaying facade of an old Saigon apartment complex, rumored to be haunted by a spirit. But this wasn't just any ghost hunt. No, Merc and Herc were there on a mission for MercTrans: to exorcize the elusive spirit of “The Scourge” from Vietnamese and capture it into English. But nothing could have prepared them for what lay in the bowels of this building."
            />
          </div>
          <p className="">
            They stepped inside, each footfall echoing down the abandoned hallways. The air grew thick and heavy as if tainted with unsaid words and half-formed whispers. They were hunting a girl ghost who wandered these halls, embodying secrets and mysteries that only a local could understand. Much like the spiritual concepts woven through the game, she was a manifestation of centuries-old Buddhist and Vietnamese beliefs.
          </p>
        </div>
        <Image
          src="/frame22.png"
          alt="frame22"
          width="840"
          height="472"
          className="mb-3 w-full"
        />
        <LuxCap
          title="Translating spiritual concepts"
        />

        <div className="md:content-start md:grid md:grid-cols-2">
          <div className="md:pr-5">
            <Video url="/01.mp4" />
          </div>
          <div>
            <DropCap
              content="THE ghost darted just around the corner, leaving behind a faint hum. Merc sighed, pulling out a notebook filled with hastily scribbled translations. “Buddhist concepts, ancestor veneration, karma… how do we get that across in English, Herc? It's one thing for us to understand it, but how can an English-speaking player truly feel it?”"
            />
            <p>
              Herc, clutching an old scroll covered in complex Vietnamese phrases, nodded thoughtfully. &ldquo;I know. Buddhism isn&apos;t just religion here; it&apos;s tied to the essence of life and death. And then there are the spirits, the lingering ties to one&apos;s lineage. Translating these concepts, we can&apos;t just use words—we need to capture the weight they carry. We could explain everything, but that would kill the mood. So instead, we tweak, distill, and let players feel these layers without knowing they&apos;re there.&rdquo;
            </p>
            <p className="md:block hidden">
              They pressed on, knowing they had to find ways to balance explanation with atmosphere, careful not to drown players in exposition but leaving enough to bring them into the world of <span className="text-[#9C1515]"> The Scourge</span>.
            </p>
          </div>
        </div>

        <Divider />
        <LuxCap title="Poetry and its challenges" />

        <div className="md:content-start md:grid md:grid-cols-2">
          <div className="md:pr-5">
            <DropCap content="THEY turned down another hallway, where the ghost had left eerie scrawlings on the walls. &ldquo;Look,&rdquo; whispered Merc, &ldquo;it&apos;s a poem—a verse that sounds like a warning.&rdquo; The words had a lyrical flow in Vietnamese, deeply tied to the rhythm and wordplay of the language. But how to render it in English?" />
            <p>
              &ldquo;Poems,&rdquo; Herc muttered, &ldquo;are like whispers from the spirit world. They sound different in every language.&rdquo;
            </p>
            <p>
              Merc began murmuring lines to himself. &ldquo;The words do make sense, but they lack the punch, the local edge that makes them...alive. We need the poetry to warn, to chill the player, just as it would in Vietnamese.&rdquo;
            </p>
            <p>
              &ldquo;Let&apos;s keep its haunting structure,&rdquo; Herc suggested, &ldquo;but adapt the words to something a Western player can understand and feel in their gut.&rdquo; And so, they set about rewriting, haunted by each line&apos;s cryptic message.
            </p>
          </div>
          <div className="relative md:top-5 left-[-16px] md:left-0 m-0 pb-[5.2vw] w-screen md:w-fit">
            <Image
              src="/1.png"
              alt="1"
              width="410"
              height="210"
              className="w-full"
            />
            <Image
              src="/3.png"
              alt="3"
              width="410"
              height="210"
              className="w-full"
            />
            <Image
              src="/4.png"
              alt="4"
              width="410"
              height="210"
              className="w-full"
            />
          </div>
        </div>

        <Divider />
        <LuxCap title="Playing word games" />

        <div className="md:content-start md:grid md:grid-cols-2">
          <div className="md:order-last">
            <DropCap content="THEY continued deeper into the complex, where Herc almost stepped on several abandoned —pieces of paper. A single faded word rested in the center of each, the remnants of a Vietnamese word game. &ldquo;Ah, here we go,&rdquo; Herc groaned. &ldquo;How did we get this one into English again?&rdquo;" />
            <p>
              &ldquo;Barely,&rdquo; Merc replied with a grim chuckle. &ldquo;Vietnamese word games are all about the tones, the inner logic, about the music of the language itself. We had to restructure this whole section to make it meaningful and still creepy in English.&rdquo;
            </p>
            <p>
              The ghost&apos;s laughter echoed down the hall, as if mocking them. They&apos;d struggled with this puzzle more than anything else, reimagining it with English wordplay that retained the game&apos;s mysterious tone, but it had taken a lot of time.
            </p>
            <p>
              &ldquo;But we made it work,&rdquo; said Herc with a grin. &ldquo;Or, at least, we hope it does.&rdquo;
            </p>
          </div>
          <div className="relative md:top-5 left-[-16px] md:left-0 m-0 md:pr-5 pb-5 w-screen md:w-fit">
            <Image
              src="/Untitled-1.png"
              alt="word-games"
              width="410"
              height="620"
              className="w-full"
            />
          </div>
        </div>

        <div>
          <Divider />
          <LuxCap title="Changing the script" />

          <DropCap content="THE ghost led them down a winding staircase, growing louder as if every step brought them closer to her. But then her voice began to shift, her whispers rephrasing and blending as if she couldn&apos;t settle on her words. Merc rolled his eyes." />
          <p>
            &ldquo;Script changes again?&rdquo; he muttered. &ldquo;Just when we think we have her voice down, the writers throw in something new. Every time we get one scene right, she slips out of our grasp, morphing.&rdquo;
          </p>
          <p>
            &ldquo;Ah, the joys of localizing a living, breathing script,&rdquo; Herc sighed, pulling out his notebook, where lines had been crossed out and rewritten dozens of times. &ldquo;But that&apos;s why we&apos;re here. We translate as the story evolves, not just once.&rdquo;
          </p>

          <Divider />
          <LuxCap title="The voice in the dark" />

          <DropCap content="MERC and Herc moved into the final room. It was eerily silent. Just as Merc began to call out to Herc, he realized he was alone. In that moment, Merc understood the haunting weight of The Scourge." />
          <p>
            Bringing a story from one culture to another is never simple, and some stories resist translation—holding secrets too complex, too intertwined with local roots to be easily distilled. But with each challenge they&apos;d overcome, they&apos;d kept true to the spirit of the game. MercTrans had tried to exorcise
            The Scourge, adapting it for a new audience while honoring the ghosts of its origin. But the specter did not appreciate being nailed down. Not in any language.
          </p>
          <Video url="/02.mp4" />
        </div>
      </div>
    </div>
  );
}

export default MainBody;


