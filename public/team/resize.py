import os
import sys
from PIL import Image

def resize_image(image_path):
    with Image.open(image_path) as img:
        width, height = img.size
        aspect_ratio = width / height

        if height > 400:
            new_height = 400
            new_width = int(new_height * aspect_ratio)
            if new_width < 300:
                new_width = 300
                new_height = int(new_width / aspect_ratio)
        else:
            new_width = 300
            new_height = int(new_width / aspect_ratio)

        img = img.resize((new_width, new_height), Image.LANCZOS)
        img.save(image_path, "JPEG")
        print(f"Resized {image_path} to {new_width}x{new_height}")

def resize_images_in_folder(folder):
    for root, _, files in os.walk(folder):
        for file in files:
            if file.lower().endswith(".jpg"):
                image_path = os.path.join(root, file)
                resize_image(image_path)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python resize_images.py <folder_path>")
        sys.exit(1)

    folder_path = sys.argv[1]
    resize_images_in_folder(folder_path)
