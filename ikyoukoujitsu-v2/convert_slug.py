import os
import re

folder_path = "/Users/dream_exp/Desktop/Projects/ikyoukoujitsu/ikyoukoujitsu-v2/src/pages/test/post"

# 指定したフォルダ内のすべてのmdxファイルに対して処理を実行
for root, dirs, files in os.walk(folder_path):
    for file in files:
        if file.endswith(".mdx"):
            file_path = os.path.join(root, file)

            # mdxファイルを読み込む
            with open(file_path, "r") as f:
                content = f.read()

            # meta変数のslugを抽出
            pattern = r'slug: "(.*?)"'
            match = re.search(pattern, content)
            if match:
                slug = match.group(1)

                # 新しいファイル名を作成
                new_file_name = slug + ".mdx"
                new_file_path = os.path.join(root, new_file_name)

                # ファイル名を変更
                os.rename(file_path, new_file_path)

                print(f"{file} -> {new_file_name}")