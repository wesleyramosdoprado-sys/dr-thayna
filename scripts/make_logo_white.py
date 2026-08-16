from PIL import Image

src = "public/images/logo-navarro-bomfim.png"
dst = "public/images/logo-navarro-bomfim-white.png"

img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a > 0:
            pixels[x, y] = (245, 244, 240, a)

img.save(dst)
print(f"Saved {dst} size={img.size}")
