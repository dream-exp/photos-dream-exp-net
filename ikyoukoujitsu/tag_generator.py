import os
import sys

def find_matching_images(folder_path, target_date):
    matching_images = []
    for file_name in os.listdir(folder_path):
        if file_name.startswith(target_date):
            matching_images.append(file_name)
    matching_images.sort(key=lambda x: int(x.split("_")[3].split(".")[0])) # Noの部分でソート
    return matching_images

def get_image_dimensions(image_path):
    # ここで画像の横幅と縦幅を取得する方法を実装してください
    # 例: 使用するライブラリはPillow (Python Imaging Library) の場合
    from PIL import Image
    with Image.open(image_path) as img:
        width, height = img.size
    return width, height

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py YYYY_MM_DD")
        return
    
    target_date = sys.argv[1]
    folder_path = "/Users/dream_exp/Desktop/Projects/ikyoukoujitsu/ikyoukoujitsu/static/images"  # 画像ファイルがあるフォルダのパスを指定してください
    
    matching_images = find_matching_images(folder_path, target_date)
    
    for image_name in matching_images:
        image_path = os.path.join(folder_path, image_name)
        width, height = get_image_dimensions(image_path)
        print(f'{{{{< img "/images/{image_name}" "{width}" "{height}" >}}}}')

if __name__ == "__main__":
    main()
