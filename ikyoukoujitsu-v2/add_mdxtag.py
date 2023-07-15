# -*- coding: utf-8 -*-
import os

def process_files(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.mdx'):
                file_path = os.path.join(root, file)
                process_file(file_path)

def process_file(file_path):
    with open(file_path, 'r+') as f:
        content = f.read()

        prepend_content = 'import Head from "next/head";\n'
        prepend_content += 'import PostLayout from "@/components/common/PostLayout";\n\n'

        append_content = '\nexport default ({ children }) => (\n'
        append_content += '  <>\n'
        append_content += '    <Head>\n'
        append_content += '      <title>{meta.Title} | 異郷好実</title>\n'
        append_content += '    </Head>\n'
        append_content += '    <PostLayout meta={meta}>{children}</PostLayout>\n'
        append_content += '  </>\n'
        append_content += ');\n'

        f.seek(0, 0)
        f.write(prepend_content + content)

        f.seek(0, os.SEEK_END)
        f.write(append_content)

        print(file_path)

folder_path = '/Users/dream_exp/Desktop/Projects/ikyoukoujitsu/ikyoukoujitsu-v2/src/pages/test/post'

process_files(folder_path)
