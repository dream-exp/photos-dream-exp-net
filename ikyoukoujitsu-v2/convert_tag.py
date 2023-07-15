import os
import re

def replace_in_mdx_files(folder_path):
    # 指定されたフォルダ内のすべての.mdxファイルに対して処理を実行
    for file_name in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file_name)
        if file_path.endswith('.mdx'):
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()

            # 置換ルールに基づいて文字列を置換
            content = re.sub(r'<p class="caption">', r'<span className="caption">', content)
            content = re.sub(r'</p>', r'</span>', content)
            content = re.sub(r'<br>', r'<br />', content)

            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(content)

# マークダウンファイルが存在するフォルダのパス
folder_path = '/Users/dream_exp/Desktop/Projects/ikyoukoujitsu/ikyoukoujitsu-v2/src/pages/test/post'

# マークダウンファイルの変換
replace_in_mdx_files(folder_path)
