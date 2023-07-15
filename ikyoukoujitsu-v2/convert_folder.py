import os
import shutil

def organize_mdx_files(folder_path):
    # 指定されたフォルダ内のすべてのファイルに対して処理を実行
    for file_name in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file_name)
        if os.path.isfile(file_path) and file_name.endswith('.mdx'):
            # ファイル名から年と月を取得
            try:
                year = file_name[:4]  # ファイル名の最初の4文字を年として取得
                month = file_name[5:7]  # ファイル名の5文字目から6文字目を月として取得
            except IndexError:
                # ファイル名が正しいフォーマットではない場合はスキップ
                continue

            # 年と月のフォルダを作成し、ファイルを移動
            year_folder = os.path.join(folder_path, year)
            month_folder = os.path.join(year_folder, month)
            os.makedirs(month_folder, exist_ok=True)
            shutil.move(file_path, month_folder)

# 使用例
folder_path = '/Users/dream_exp/Desktop/Projects/ikyoukoujitsu/ikyoukoujitsu-v2/src/pages/test/post'  # 対象のフォルダパスを指定
organize_mdx_files(folder_path)
