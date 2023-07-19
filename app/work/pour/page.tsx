import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface pageProps {}

const apps = [
  {
    name: "How We Feel",
    remarks: "Categorization of emotions",
    icon: "/pour/apps/hwf.png",
    screen: "/pour/apps/screens/hwf.png",
  },
  {
    name: "Calm",
    remarks: "Meditation UI",
    icon: "/pour/apps/caml.png",
    screen: "/pour/apps/screens/calm.png",
  },
  {
    name: "Alan Mind",
    remarks: "Guided journaling modules",
    icon: "/pour/apps/alan.png",
    screen: "/pour/apps/screens/alan.png",
  },
  {
    name: "Co-Star",
    remarks: "Calendar element",
    icon: "/pour/apps/costar.png",
    screen: "/pour/apps/screens/costar.png",
  },
  {
    name: "Craft",
    remarks: "Notes UI",
    icon: "/pour/apps/craft.png",
    screen: "/pour/apps/screens/craft.png",
  },
  {
    name: "Clover",
    remarks: "Notes UI",
    icon: "/pour/apps/clover.png",
    screen: "/pour/apps/screens/clover.png",
  },
];

const Pour: FC<pageProps> = ({}) => {
  return (
    <>
      <header className="container max-w-6xl space-y-6 pb-16">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "link" }), "pl-0")}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to portfolio
        </Link>
        <h1 className="text-[28px] md:text-[64px] font-[700] max-w-4xl leading-[110%] pb-12">
          Improving the effectiveness CBT with the help of Journaling
        </h1>
        <div className="tldr flex flex-col border border-zinc-800">
          <div className="w-full aspect-video relative  border-b border-zinc-800">
            <Image
              src={"/pour-page-cover.png"}
              fill
              alt="cover"
              className="p-2"
            />
          </div>
          <div className="w-full h-auto relative grid grid-cols-1 md:grid-cols-3 ">
            <div className="intro border-r p-6 border-zinc-800 space-y-4">
              <p className="text-[14px] opacity-60 pb-4">Intro</p>
              <p className="leading-6 text-[16px]">
                According to my research most people who don&apos;t journal,
                don&apos;t do it because of how daunting an empty page seems.
                Those who do, derive a lot of value from it. Therapists often
                recommend journalig as an activity.
              </p>
              <p className="leading-6 text-[16px]">
                Pour is an AI powered journal that helps you express your
                emotions easily with the help of guided journaling and prompts.
                It also has a toolset to connect your journal to your therapy
                sessions.
              </p>
            </div>
            <div className="details text-sm border-r border-zinc-800 flex flex-col">
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">Scope</p>
                <p className="text-[16px] font-medium">Capstone project</p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">Period</p>
                <p className="text-[16px] font-medium">
                  January, 2023 – May, 2023
                </p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">Team</p>
                <p className="text-[16px] font-medium">Solo project</p>
              </div>
              <div className="stat p-6 space-y-2 border-b border-zinc-800">
                <p className="text-[14px] opacity-60">My Role</p>
                <p className="text-[16px] font-medium">
                  UX Research, UI Design
                </p>
              </div>
              <div className="stat p-6 space-y-2">
                <p className="text-[14px] opacity-60">Key Deliverables</p>
                <p className="text-[16px] font-medium">
                  Research, Wireframes, Prototype
                </p>
              </div>
            </div>
            <div className="stats flex flex-col">
              <div className="stat p-6 border-b border-zinc-800">
                <p className="text-[48px] font-black">100%</p>
                <p className="text-[14px] opacity-60">
                  of interviewed therapists would recommend Pour to their
                  clients
                </p>
              </div>
              <div className="stat p-6 border-b border-zinc-800">
                <p className="text-[48px] font-black">150+</p>
                <p className="text-[14px] opacity-60">
                  Signups on the interest form
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-zinc-800 p-6">
            <Link
              href={"google.com"}
              className={cn(
                buttonVariants({ variant: "link", size: "lg" }),
                "pl-0 text-[18px] font-bold w-fit flex items-center gap-2"
              )}
            >
              View Interactive Prototype
              <ArrowUpRight size={20} className="opacity-60" />
            </Link>
          </div>
        </div>
      </header>
      <article className="container max-w-6xl mt-12 flex gap-6 relative">
        <div className="toc w-72 relative hidden md:block">
          <div className="sticky top-44 flex flex-col gap-2 font-bold text-sm">
            <a href="#background">Background</a>
            <a href="#background" className="pl-4 opacity-60">
              Why Journaling
            </a>
            <a href="#research">Research</a>
            <a href="#background" className="pl-4 opacity-60">
              Desk
            </a>
            <a href="#background" className="pl-4 opacity-60">
              Competetive
            </a>
            <a href="#background" className="pl-4 opacity-60">
              HMWs
            </a>
            <a href="#background" className="pl-4 opacity-60">
              Desk
            </a>
            <a href="#wireframes">Wireframes</a>
            <a href="#final">Final App</a>
            <a href="#background" className="pl-4 opacity-60">
              Prototype
            </a>
            <a href="#final">Outcomes</a>
            <a href="#final">Next Steps</a>
          </div>
        </div>
        <div className="content grow prose prose-2xl prose-zinc dark:prose-invert space-y-40 md:pl-36">
          <div id="background" className="scroll-mt-52">
            <h2 className="mt-0">Background</h2>
            <p className="text-[18px] opacity-75">
              This project was my capstone project submission for my grad degree
              in proeduct design at{" "}
              <Link
                href="https://www.newschool.edu/parsons/"
                className="underline-offset-4"
              >
                Parsons School of Design.
              </Link>{" "}
              This was a 5 month long project where I worked as a solo UX
              Researcher, UI Designer and eventually even full stack developer.
              This project earned me an <strong>honours degree</strong> and
              ended up being a <strong>featured project</strong>!
            </p>
            <h4>Why Journaling?</h4>
            <p className="text-[18px] opacity-75">
              I was introduced to journaling as a medium of expression when I
              started therapy. Since then, it has helped me immensely and I
              wanted to make this tool as accessible and optimal as possible.
              This project is a deep dive into journaling as a practise and how
              it can be used to optimise CBT sessions (more on that later).
            </p>
          </div>
          <div id="research" className="scroll-mt-52">
            <h2>Research</h2>
            <p className="text-[18px] opacity-75">
              Before launching Figma, I had to figure out what I will design.
              The goal of the research step was to figure out why (and why
              don&apos;t) people journal, how therapists use journaling as a
              tool and some of the existing tools in the market.
            </p>
            <h3>Interviews</h3>
            <p className="text-[18px] opacity-75">
              I condeucted qualitative discussions with 7 people with varying
              levels of journaling experience and 2 therapists about why and how
              they journal and if they don’t what’s been the blockers if any
            </p>
            <h4 className="pb-4">Insights</h4>
            <p className="text-[18px] opacity-75">
              The qualitative interviews led to some interesting takeaways and I
              could see the strong connecting between therapy and journaling.
            </p>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 border-l border-t border-zinc-800 not-prose">
              <div className="border-b border-r border-zinc-800 p-6">
                <p className="text-[48px] font-black">🤷‍♂️</p>
                <p className="text-[18px] opacity-75">
                  Most people who don&apos;t journal, don&apos;t know how to
                  start
                </p>
              </div>
              <div className="border-b border-r border-zinc-800 p-6">
                <p className="text-[48px] font-black">🫣</p>
                <p className="text-[18px] opacity-75">
                  People feel too vulnerable expressing their thoughts
                </p>
              </div>
              <div className="border-b border-r border-zinc-800 p-6">
                <p className="text-[48px] font-black">🗒️</p>
                <p className="text-[18px] opacity-75">
                  People in therapy were introduced to journaling by their
                  therapists
                </p>
              </div>
              <div className="border-b border-r border-zinc-800 p-6">
                <p className="text-[48px] font-black">👩‍⚕️</p>
                <p className="text-[18px] opacity-75">
                  Therapists often recommend journaling as tool in CBT
                </p>
              </div>
              <div className="border-b border-r border-zinc-800 p-6">
                <p className="text-[48px] font-black">🚨</p>
                <p className="text-[18px] opacity-75">
                  People often use journaling as a crisis management tool
                </p>
              </div>
              <div className="border-b border-r border-zinc-800 p-6">
                <p className="text-[48px] font-black">📖</p>
                <p className="text-[18px] opacity-75">
                  People who journal often reflect and read past journals
                </p>
              </div>
            </div>
            <h4>Competitive Landscape</h4>
            <p className="text-[18px] opacity-75">
              I studied some apps that exists in the journaling, mental health
              and note-taking categories. My goal with this step was to
              understand what features exist on the market and where
              there&apos;s space to add.
            </p>
            <p className="text-sm p-4 border border-zinc-800 mb-8">
              💡 Hover on the app icons to see my takeaways from each
            </p>
            <div className="flex flex-wrap gap-6">
              {apps.map((app) => (
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger className="flex flex-col items-center">
                      <div className="w-[75px] aspect-square relative hover:scale-110 transition">
                        <Image
                          src={app.icon}
                          fill
                          alt={app.name}
                          className="mt-0"
                        />
                      </div>
                      <p className="text-sm">{app.name}</p>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="p-4 not-prose w-52"
                    >
                      <p className="mb-2">
                        <strong>{app.name}</strong>
                      </p>
                      <p className="leading-5 mb-2">{app.remarks}</p>
                      <div className="w-full h-96 relative">
                        <Image
                          src={app.screen}
                          fill
                          alt={app.name}
                          className="mt-0"
                        />
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <h4>HMWs {" -> App Features"}</h4>
            <p className="text-[18px] opacity-75">
              Its time to synthesize research insights and map them to features
              we would want in the app.
            </p>
          </div>
          <div>
            <h2>Wireframes</h2>
            <p className="text-[18px] opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eaque quisquam maxime tenetur quia recusandae, porro quis sunt.
              Ratione, vel. Quas aliquid excepturi ex ipsam officia cum odit
              velit placeat!
            </p>
          </div>
          <div>
            <h2>The Final App</h2>
            <p className="text-[18px] opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eaque quisquam maxime tenetur quia recusandae, porro quis sunt.
              Ratione, vel. Quas aliquid excepturi ex ipsam officia cum odit
              velit placeat!
            </p>
            <h4>Play with the prototype</h4>
            <p className="text-[18px] opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eaque quisquam maxime tenetur quia recusandae, porro quis sunt.
              Ratione, vel. Quas aliquid excepturi ex ipsam officia cum odit
              velit placeat!
            </p>
          </div>
          <div>
            <h2>Outcomes</h2>
            <p className="text-[18px] opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eaque quisquam maxime tenetur quia recusandae, porro quis sunt.
              Ratione, vel. Quas aliquid excepturi ex ipsam officia cum odit
              velit placeat!
            </p>
          </div>
          <div>
            <h2>Next Steps</h2>
            <p className="text-[18px] opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eaque quisquam maxime tenetur quia recusandae, porro quis sunt.
              Ratione, vel. Quas aliquid excepturi ex ipsam officia cum odit
              velit placeat!
            </p>
          </div>
          <div>
            <h2>Credits</h2>
            <p className="text-[18px] opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eaque quisquam maxime tenetur quia recusandae, porro quis sunt.
              Ratione, vel. Quas aliquid excepturi ex ipsam officia cum odit
              velit placeat!
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Pour;
