from PIL import Image
from pathlib import Path


def remove_near_white(src: Path, dest: Path, threshold: int = 245) -> None:
    im = Image.open(src).convert("RGBA")
    pixels = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r >= threshold and g >= threshold and b >= threshold:
                pixels[x, y] = (r, g, b, 0)
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "PNG")
    print(f"OK {dest.name} {im.size}")


root = Path(r"C:\Users\t430\Glotelco-Globatel-Website\public")
remove_near_white(root / "logo.png", root / "logo.png", 240)

phones = [
    ("phone-1.png", "phone-1.png", 248),
    ("phone-2.jpg", "phone-2.png", 248),
    ("phone-3.jpg", "phone-3.png", 248),
    ("phone-4.png", "phone-4.png", 248),
    ("phone-5.jpg", "phone-5.png", 248),
]
for src_name, dest_name, thr in phones:
    remove_near_white(root / "phones" / src_name, root / "phones" / dest_name, thr)

im = Image.open(root / "phones" / "phone-6.png").convert("RGBA")
im.save(root / "phones" / "phone-6.png", "PNG")
print("OK phone-6 kept")
