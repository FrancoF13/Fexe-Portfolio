from PIL import Image

def convert_to_transparent_threshold(input_path, output_path):
    img = Image.open(input_path).convert("L")
    
    # Create a new image for the alpha mask
    alpha_mask = Image.new("L", img.size)
    
    # Process pixels: if pixel is dark (< 200), make it opaque (255)
    # If pixel is light (> 200), make it transparent (0)
    # To get anti-aliasing but without the dirty background:
    # Let's map 0-150 to 255 (fully opaque)
    # Map 150-230 to a gradient
    # Map 230-255 to 0 (fully transparent)
    
    pixels = img.load()
    alpha_pixels = alpha_mask.load()
    
    for y in range(img.height):
        for x in range(img.width):
            val = pixels[x, y]
            if val > 230:
                alpha_pixels[x, y] = 0
            elif val < 100:
                alpha_pixels[x, y] = 255
            else:
                # linear interpolation
                alpha_pixels[x, y] = int(255 * (230 - val) / (230 - 100))
                
    solid_black = Image.new("RGBA", img.size, (0, 0, 0, 255))
    solid_black.putalpha(alpha_mask)
    solid_black.save(output_path, "PNG")

try:
    convert_to_transparent_threshold("fexe-logo-combined.jpg", "fexe-logo-transparent.png")
    print("Success")
except Exception as e:
    print("Error:", e)
