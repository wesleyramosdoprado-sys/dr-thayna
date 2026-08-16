from PIL import Image
import sys

src = "public/images/logo-navarro-bomfim-source.png"
dst = "public/images/logo-navarro-bomfim.png"

img = Image.open(src).convert("RGBA")
datas = img.getdata()

new_data = []
threshold = 235
for r, g, b, a in datas:
    if r >= threshold and g >= threshold and b >= threshold:
        new_data.append((r, g, b, 0))
    else:
        new_data.append((r, g, b, a))

img.putdata(new_data)

bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

img.save(dst)
print(f"Saved {dst} size={img.size}")
