import fs from "fs";
import path from "path";

import { MetaType } from "@/types";

const collectMetaVariables = async (folderPath: string) => {
  const metaVariables: MetaType[] = [];

  const traverseDirectory = async (directory: string) => {
    const files = await fs.promises.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await fs.promises.stat(filePath);

      if (stats.isDirectory()) {
        await traverseDirectory(filePath); // 再帰的にディレクトリを探索
      } else if (path.extname(file) === ".mdx") {
        const fileContents = await fs.promises.readFile(filePath, "utf-8");
        const match = fileContents.match(
          /export\s+const\s+meta\s+=\s+({[\s\S]*?});/
        );

        if (match && match[1]) {
          const metaCode = `(${match[1]})`;
          const metaObject = eval(metaCode);
          metaVariables.push(metaObject);
        }
      }
    }
  };

  await traverseDirectory(folderPath);

  // @ts-ignore
  return metaVariables.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getMetaVariables = async (folderPath: string) => {
  const allMetaVariables = await collectMetaVariables(folderPath);
  return allMetaVariables;
};
