import { MetaType } from "@/types";

const getPostURLFromMeta = (meta: MetaType) => {
  const date = new Date(meta.date);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");

  const formattedString = `test/post/${year}/${month}/${meta.slug}`;

  return formattedString;
};

export default getPostURLFromMeta;
