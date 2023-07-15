import Image from "next/image";
import Link from "next/link";

import { MetaType } from "@/types";
import getFormattedDate from "@/utils/getFormattedDate";
import getPostURLFromMeta from "@/utils/getPostURLFromMeta";

type Props = {
  meta: MetaType;
};

const PostCard: React.FC<Props> = (props) => {
  const { meta } = props;

  return (
    <Link href={getPostURLFromMeta(meta)}>
      <div className="w-[350px] flex flex-col gap-2 tracking-[0.08em] cursor-pointer hover:opacity-70 transition-all">
        <Image
          src={meta.share_img}
          alt={meta.Title}
          width={350}
          height={350 / 1.5}
        />
        <div className="flex flex-col gap-1">
          <span className="text-neutral-400 text-xs">
            {getFormattedDate(new Date(meta.date))}
          </span>
          <span className="text-neutral-500 text-sm -ml-1">{meta.Title}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
