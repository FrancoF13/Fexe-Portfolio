from PIL import Image
import PIL.ImageOps

def convert_to_transparent(input_path, output_path):
    img = Image.open(input_path).convert("L")
    solid_black = Image.new("RGBA", img.size, (0, 0, 0, 255))
    alpha_mask = PIL.ImageOps.invert(img)
    solid_black.putalpha(alpha_mask)
    solid_black.save(output_path, "PNG")

try:
    convert_to_transparent("fexe-logo-combined.jpg", "fexe-logo-transparent.png")
    convert_to_transparent("logo.jpg", "logo-transparent.png")
    print("Success")
except Exception as e:
    print("Error:", e)
