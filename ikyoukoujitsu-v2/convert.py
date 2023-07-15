import os
import re

def convert_markdown_files(folder_path):
    pattern = r'{{< img "(.+?)" >}}'

    for filename in os.listdir(folder_path):
        if filename.endswith('.md'):
            input_file = os.path.join(folder_path, filename)
            output_file = os.path.join(folder_path, f"{os.path.splitext(filename)[0]}.md")

            with open(input_file, 'r') as file:
                markdown_content = file.read()

            html_content = re.sub(pattern, r'<img src="\1" alt="post image" />', markdown_content)

            with open(output_file, 'w') as file:
                file.write(html_content)

folder_path = '/Users/dream_exp/Desktop/Projects/ikyoukoujitsu/ikyoukoujitsu-v2/src/pages/test/post'
convert_markdown_files(folder_path)
