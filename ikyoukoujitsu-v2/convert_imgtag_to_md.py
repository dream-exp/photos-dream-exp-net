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

            # 画像埋め込みのコードをマークダウンのフォーマットに変換
            pattern = r'<img src="(.*?)" alt="post image" />'
            replacement = r'![post image](\1)'
            new_content = re.sub(pattern, replacement, content)

            # 変換後の内容でmdxファイルを上書き保存
            with open(file_path, "w") as f:
                f.write(new_content)

            print(f"{file} processed.")