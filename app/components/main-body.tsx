import Image from "next/image";
import DropCap from "./ui/better-drop-cap";
import LuxCap from "./ui/lux-cap";
import { Video } from "./ui/video";
import { Divider } from "./ui/divider";


const MainBody = () => {

  return (
    <div className="bg-body-sm md:bg-body bg-contain py-7 min-w-full text-base text-justify self-start">
      <div className="mx-4">
        <DropCap content="IN the flickering glow of their lanterns, Merc and Herc — two seasoned ghost hunters — found themselves staring up  at the decaying facade of an old Saigon apartment complex, rumored to be haunted by a spirit. But this wasn’t just any ghost hunt. No, Merc and Herc were there on a mission for MercTrans: to exorcize the elusive spirit of “The Scourge” from Vietnamese and capture it into English. But nothing could have prepared them for what lay in the bowels of this building." />
        <p>
          They stepped inside, each footfall echoing down the abandoned hallways. The air grew thick and heavy as if tainted with unsaid words and half-formed whispers. They were hunting a girl ghost who wandered these halls, embodying secrets and mysteries that only a local could understand. Much like the spiritual concepts woven through the game, she was a manifestation of centuries-old Buddhist and Vietnamese beliefs.
        </p>
        <div className="md:block hidden">
          <LuxCap title="Translating spiritual concepts" />
        </div>
        <div className="relative right-4 flex w-screen">
          <Image
            alt="ban-tho" src="/frame22.png" width={1920} height={1080}
            className="aspect-video"
          />
        </div>
        <div className="md:hidden pt-3">
          <LuxCap title="Translating spiritual concepts" />
        </div>
        <div className="relative right-4 flex justify-center mb-7 w-screen aspect-[375/808.54]">
          <Video url="/01.mp4" />
        </div>
        <DropCap content="THE ghost darted just around the corner, leaving behind a faint hum. Merc sighed, pulling out a notebook filled with hastily scribbled translations. “Buddhist concepts, ancestor veneration, karma… how do we get that across in English, Herc? It&apos;s one thing for us to understand it, but how can an English-speaking player truly feel it?”" />
        <Divider />
        <LuxCap title="Poetry and its challenges" />
        <DropCap content="THEY turned down another hallway, where the ghost had left eerie scrawlings on the walls. “Look,” whispered Merc, “it&apos;s a poem—a verse that sounds like a warning.” The words had a lyrical flow in Vietnamese, deeply tied to the rhythm and wordplay of the language. But how to render it in English?" />
        <p>
          “Poems,” Herc muttered, “are like whispers from the spirit world. They sound different in every language.”
        </p>
        <p>
          Merc began murmuring lines to himself. “The words do make sense, but they lack the punch, the local edge that makes them...alive. We need the poetry to warn, to chill the player, just as it would in Vietnamese.”
        </p>
        <p>
          “Let&apos;s keep its haunting structure,” Herc suggested, “but adapt the words to something a Western player can understand and feel in their gut.” And so, they set about rewriting, haunted by each line&apos;s cryptic message.
        </p>
        <div className="relative right-4 flex flex-col w-screen">
          <Image alt="3imgs" src="/1.png" width={820} height={418} className="w-full aspect-[375/240]" />
          <Image alt="3imgs" src="/3.png" width={820} height={418} className="w-full aspect-[375/240]" />
          <Image alt="3imgs" src="/4.png" width={820} height={418} className="w-full aspect-[375/240]" />
        </div>
        <Divider />
        <LuxCap title="Playing word games" />
        <DropCap content="THEY continued deeper into the complex, where Herc almost stepped on several abandoned — pieces of paper. A single faded word rested in the center of each, the remnants of a Vietnamese word game. “Ah, here we go,” Herc groaned. “How did we get this one into English again?”" />
        <p>
          “Barely,” Merc replied with a grim chuckle. “Vietnamese word games are all about the tones, the inner logic, about the music of the language itself. We had to restructure this whole section to make it meaningful and still creepy in English.”
        </p>
        <p>
          The ghost&apos;s laughter echoed down the hall, as if mocking them. They&apos;d struggled with this puzzle more than anything else, reimagining it with English wordplay that retained the game&apos;s mysterious tone, but it had taken a lot of time.
        </p>
        <p>
          “But we made it work,” said Herc with a grin. “Or, at least, we hope it does.”
        </p>
        <div className="relative right-4 flex flex-col w-screen">
          <Image alt="word games" src="/Untitled-1.png" width={410} height={620} className="w-full aspect-[410/620]" />
        </div>
        <Divider />
        <LuxCap title="Changing the script" />
        <DropCap content="THE ghost led them down a winding staircase, growing louder as if every step brought them closer to her. But then her voice began to shift, her whispers rephrasing and blending as if she couldn&apos;t settle on her words. Merc rolled his eyes." />
        <p>
          “Script changes again?” he muttered. “Just when we think we have her voice down, the writers throw in something new. Every time we get one scene right, she slips out of our grasp, morphing.”
        </p>
        <p>
          “Ah, the joys of localizing a living, breathing script,” Herc sighed, pulling out his notebook, where lines had been crossed out and rewritten dozens of times. “But that&apos;s why we&apos;re here. We translate as the story evolves, not just once.”
        </p>
        <Divider />
        <LuxCap title="The voice in the dark" />
        <DropCap content="MERC and Herc moved into the final room. It was eerily silent. Just as Merc began to call out to Herc, he realized he was alone." />
        <p>
          A chill crept up his spine. The ghost&apos;s voice rose behind him, soft but sharp. “You never should have translated this game,” it hissed.
        </p>
        <p>
          In that moment, Merc understood the haunting weight of <span className="text-scourge">The Scourge</span>. Bringing a story from one culture to another is never simple, and some stories resist translation—holding secrets too complex, too intertwined with local roots to be easily distilled. But with each challenge they&apos;d overcome, they&apos;d kept true to the spirit of the game. MercTrans had tried to exorcise <span className="text-scourge">The Scourge</span>, adapting it for a new audience while honoring the ghosts of its origin. But the specter did not appreciate being nailed down. Not in any language.
        </p>
        <div className="relative right-4 flex justify-center mb-[52px] w-screen">
          <Video url="/02.mp4" />
        </div>
      </div>
    </div>
  )
}
export default MainBody;
