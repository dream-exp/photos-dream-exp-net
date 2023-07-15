import os
import toml
import re

def convert_frontmatter(frontmatter_string):
    metadata = toml.loads(frontmatter_string)
    converted_metadata = ',\n'.join([f'{key}: "{value}"' for key, value in metadata.items()])
    return f'export const meta = {{\n{converted_metadata}\n}}'

def convert_markdown_files(folder_path):
    # 指定されたフォルダ内のすべてのマークダウンファイルに対して処理を実行
    for file_name in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file_name)
        if file_path.endswith('.md'):
            with open(file_path, 'r') as file:
                content = file.read()
            
            # Frontmatter部分を抽出し、変換を実行
            frontmatter_string = extract_frontmatter(content)
            converted_string = convert_frontmatter(frontmatter_string)
            
            # 変換結果をマークダウンファイル内で置き換える
            converted_content = re.sub(r'\+\+\+.*?\+\+\+', converted_string, content, flags=re.DOTALL)
            
            # 変換結果を元のファイルに上書き保存
            with open(file_path, 'w') as file:
                file.write(converted_content)

def extract_frontmatter(markdown_content):
    # マークダウンの Frontmatter 部分を抽出する
    frontmatter_start = markdown_content.find('+++\n') + 4
    frontmatter_end = markdown_content.find('\n+++', frontmatter_start)
    return markdown_content[frontmatter_start:frontmatter_end]

# マークダウンファイルが存在するフォルダのパス
folder_path = '/Users/dream_exp/Desktop/Projects/ikyoukoujitsu/ikyoukoujitsu-v2/src/pages/test/post'

# マークダウンファイルの変換
convert_markdown_files(folder_path)
