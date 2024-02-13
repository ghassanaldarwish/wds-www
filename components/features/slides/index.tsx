"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
// import { pageSlice } from "@/store/slides";
import { AnimatePresence, motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import SlideMenu from "./slide-menu";
import MonacoEditor from "./monaco-editor";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { CreateSlide } from "./create-slide";

export default function Slides() {
  const [, direction] = [0, 0];

  return (
    <motion.div className={cn("h-full  w-full grow bg-secondary")}>
      <Tabs defaultValue="raw" className="h-full relative ">
        <TabsList className=" absolute top-[2%] right-1/2 transform translate-x-1/2">
          <TabsTrigger value="raw" onClick={() => {}}>
            <div className="flex gap-2 relative justify-center items-center">
              <span>Raw</span>
            </div>
          </TabsTrigger>

          <TabsTrigger value="preview" onClick={() => {}}>
            <div className="flex gap-2 relative justify-center items-center">
              <span>Preview</span>
            </div>
          </TabsTrigger>

          <TabsTrigger value="files" onClick={() => {}}>
            <div className="flex gap-2 relative justify-center items-center">
              <span>Files</span>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="raw"
          className="border-none p-0 outline-none  h-full   "
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div className=" h-[99.6%] grid grid-cols-6  grid-rows-6 ">
              <MainViewRaw />
              <FooterView />
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent
          value="preview"
          className="border-none p-0 outline-none  h-full   "
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div className=" h-[99.6%] grid grid-cols-6  grid-rows-6 ">
              <MainViewPreview />
              <FooterView />
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent
          value="files"
          className="border-none p-0 outline-none  h-full   "
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div className=" h-[99.6%] grid grid-cols-6  grid-rows-6 ">
              <MainViewPreview />
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

function MainViewRaw() {
  return (
    <motion.div className="w-[80%] row-span-5 col-start-2 col-span-6 flex items-center justify-center ">
      <AspectRatio
        ratio={16 / 9}
        className="bg-background  shrink-0  shadow-md "
      >
        <MonacoEditor />
      </AspectRatio>
    </motion.div>
  );
}

function MainViewPreview() {
  // const { pin }: any = useWorkspaceContext();
  // const { data } = pin?.pinQuery;
  const data: any = null;
  return (
    <motion.div className="w-[80%] row-span-5 col-start-2 col-span-6 flex items-center justify-center ">
      <AspectRatio
        ratio={16 / 9}
        className="bg-background  shrink-0  shadow-md "
      >
        {data?.slides[0]?.text}
      </AspectRatio>
    </motion.div>
  );
}

function FooterView() {
  const data: any = null;

  return (
    <motion.div className="bg-secondary w-[100%] row-span-1 col-span-6   relative">
      <div className="relative w-[100%] ">
        <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto py-4">
          <div className="snap-center shrink-0">
            <div className="shrink-0 w-4"></div>
          </div>
          {data?.slides?.map((slide: any, i: any) => {
            return <Slide index={i} key={i} slide={slide} />;
          })}

          <CreateSlide />
          <div className="snap-center shrink-0">
            <div className="shrink-0 w-4"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Slide({ index, slide }: any) {
  const { name: workspace } = useParams();

  const q = useSearchParams();

  const pinId = q.get("pinId");
  const pageIndex: any = q.get("page");

  return (
    <Link
      href={`/workspace/${workspace}/design?pinId=${pinId}&page=${index}&slideId=${slide.id}`}
      key={index}
      className={cn(
        "h-fit  group snap-start shrink-0 w-40 relative cursor-pointer"
      )}
    >
      <AspectRatio
        ratio={16 / 9}
        className={cn(
          "bg-background  shrink-0  shadow-md border rounded-md",
          index === parseInt(pageIndex) && "border-2 border-primary"
        )}
      >
        {slide.text}
      </AspectRatio>
      <span className="absolute top-1 right-2 opacity-0 group-hover:opacity-100">
        <SlideMenu index={index} slide={slide} />
      </span>
      <span className="absolute bottom-1 left-2">{index + 1}</span>
    </Link>
  );
}
