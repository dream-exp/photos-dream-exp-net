import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import PostCard from "@/components/common/PostCard";
import { MetaType } from "@/types";
import getFormattedDate from "@/utils/getFormattedDate";
import { getMetaVariables } from "@/utils/markdown";

type Props = {
  contentMetas: MetaType[];
};

const Home: NextPage<Props> = (props) => {
  const { contentMetas } = props;

  return (
    <main>
      <div className="w-full h-screen">
        <div className="w-full h-full animate-fade-in">
          <div className="flex justify-center items-center z-10 bg-black bg-opacity-60 absolute top-0 left-0 w-full h-full">
            <h1 className="text-white text-4xl font-thin tracking-[1.5em] -mr-12 -mt-10">
              異郷好実
            </h1>
          </div>
          <Image
            src={contentMetas[0].share_img}
            alt="naoshima"
            fill
            className="w-full h-full object-cover z-0 absolute top-0 left-0"
          />
          <div className="border-l-4 border-white p-2 flex flex-col gap-2 absolute text-white z-20 bottom-[4vw] left-[4vw] tracking-[0.2em] hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer">
            <span className="text-xs pl-2">
              {getFormattedDate(new Date(contentMetas[0].date))}
            </span>
            <span className="text-sm">『{contentMetas[0].Title}』</span>
          </div>
          <div className="absolute z-20 bottom-0 left-[50%] h-[30vh] w-[1px] bg-neutral-300" />
          <div className="absolute text-white py-2 pb-3 px-3 right-[4vw] bottom-[4vw] tracking-[0.2em] z-20 hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer">
            <span className="text-sm">異郷好実について</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-16 py-[100px]">
        <div className="grid grid-cols-3 gap-x-14 gap-y-14">
          {contentMetas.map((meta, idx) => {
            return (
              <div key={`postcard_${idx}`}>
                <PostCard meta={contentMetas[idx]} />
              </div>
            );
          })}
          {/* <div className="w-[280px] flex flex-col gap-4 tracking-[0.08em]">
            <Image
              src="/images/L1001082.jpg"
              alt="naoshima"
              width={280}
              height={280 / 1.5}
            />
            <div className="flex flex-col gap-1">
              <span className="text-neutral-400 text-xs">2023.06.23</span>
              <span className="text-neutral-500 text-sm -ml-1">
                『直島、穏やかな時間の中で』
              </span>
            </div>
          </div>
          <div className="w-[280px] flex flex-col gap-4 tracking-[0.08em]">
            <Image
              src="/images/20230501-L1000939.jpg"
              alt="naoshima"
              width={280}
              height={280 / 1.5}
            />
            <div className="flex flex-col gap-1">
              <span className="text-neutral-400 text-xs">2023.06.23</span>
              <span className="text-neutral-500 text-sm -ml-1">
                『直島、穏やかな時間の中で』
              </span>
            </div>
          </div>
          <div className="w-[280px] flex flex-col gap-4 tracking-[0.08em]">
            <Image
              src="/images/L1009757.jpg"
              alt="naoshima"
              width={280}
              height={280 / 1.5}
            />
            <div className="flex flex-col gap-1">
              <span className="text-neutral-400 text-xs">2023.06.23</span>
              <span className="text-neutral-500 text-sm -ml-1">
                『直島、穏やかな時間の中で』
              </span>
            </div>
          </div>
          <div className="w-[280px] flex flex-col gap-4 tracking-[0.08em]">
            <Image
              src="/images/L1009672.jpg"
              alt="naoshima"
              width={280}
              height={280 / 1.5}
            />
            <div className="flex flex-col gap-1">
              <span className="text-neutral-400 text-xs">2023.06.23</span>
              <span className="text-neutral-500 text-sm -ml-1">
                『直島、穏やかな時間の中で』
              </span>
            </div>
          </div>
          <div className="w-[280px] flex flex-col gap-4 tracking-[0.08em]">
            <Image
              src="/images/20230416-L1009480.jpg"
              alt="naoshima"
              width={280}
              height={280 / 1.5}
            />
            <div className="flex flex-col gap-1">
              <span className="text-neutral-400 text-xs">2023.06.23</span>
              <span className="text-neutral-500 text-sm -ml-1">
                『直島、穏やかな時間の中で』
              </span>
            </div>
          </div>
          <div className="w-[280px] flex flex-col gap-4 tracking-[0.08em]">
            <Image
              src="/images/20230416-R0009307.jpg"
              alt="naoshima"
              width={280}
              height={280 / 1.5}
            />
            <div className="flex flex-col gap-1">
              <span className="text-neutral-400 text-xs">2023.06.23</span>
              <span className="text-neutral-500 text-sm -ml-1">
                『直島、穏やかな時間の中で』
              </span>
            </div>
          </div>
          <div className="w-[280px] flex flex-col gap-4 tracking-[0.08em]">
            <Image
              src="/images/20230317-L1005699.jpg"
              alt="naoshima"
              width={280}
              height={280 / 1.5}
            />
            <div className="flex flex-col gap-1">
              <span className="text-neutral-400 text-xs">2023.06.23</span>
              <span className="text-neutral-500 text-sm -ml-1">
                『直島、穏やかな時間の中で』
              </span>
            </div>
          </div> */}
        </div>
        <div className="flex gap-48">
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-70 transition-all"
            >
              <Image
                src="/images/left_angle.svg"
                alt="left angle"
                width={10}
                height={16}
              />
              <span>新しい記事</span>
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="flex gap-3 hover:opacity-70 transition-all"
            >
              <span>古い記事</span>
              <Image
                src="/images/right_angle.svg"
                alt="left angle"
                width={10}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps = async () => {
  const contentsPromise = await getMetaVariables("src/pages/test/post");
  const contentMetas = await Promise.all(contentsPromise);

  return {
    props: {
      contentMetas: contentMetas,
    },
  };
};

export default Home;
