#!/usr/bin/env python3
"""Convert game assets to optimized WebP for the Hook's Legacy website."""

from PIL import Image
import os

SRC = r"C:\Users\danie\Documents\We Are Keepers Of The Sea"
DST = os.path.join(SRC, "SITO", "assets", "img")

# Ensure output dir exists
os.makedirs(DST, exist_ok=True)

def save_webp(img, name, quality=82):
    path = os.path.join(DST, name)
    img.save(path, "WEBP", quality=quality)
    size_kb = os.path.getsize(path) / 1024
    print(f"  -> {name} ({img.size[0]}x{img.size[1]}, {size_kb:.0f} KB)")

# ── 1. LOGO ──────────────────────────────────────────
print("=== LOGO ===")
logo_src = os.path.join(SRC, "Logo 1000x1000.png")
logo = Image.open(logo_src).convert("RGBA")

# Hero logo (square, 400x400)
hero_logo = logo.copy()
hero_logo.thumbnail((400, 400), Image.LANCZOS)
save_webp(hero_logo, "logo-hero.webp", quality=85)

# Small header logo (64x64)
sm_logo = logo.copy()
sm_logo.thumbnail((80, 80), Image.LANCZOS)
save_webp(sm_logo, "logo-sm.webp", quality=80)

# ── 2. SCREENSHOTS ───────────────────────────────────
print("\n=== SCREENSHOTS ===")
ss_dir = os.path.join(SRC, "SCREENSHOT", "SCREENSHOT STORE", "[Iphone 6.5 6.7 6.9] 2868x1320")

# Use ITA screenshots 1-5
for i in range(1, 6):
    src_name = f"ITA{i}.png"
    dst_name = f"screenshot-{i}.webp"
    src_path = os.path.join(ss_dir, src_name)
    
    if not os.path.exists(src_path):
        print(f"  SKIP: {src_name} not found")
        continue
    
    img = Image.open(src_path).convert("RGB")
    # Resize to 1200 width, maintain aspect ratio
    w, h = img.size
    new_w = 1200
    new_h = int(h * (new_w / w))
    img = img.resize((new_w, new_h), Image.LANCZOS)
    save_webp(img, dst_name, quality=80)

# ── 3. STORY IMAGE ───────────────────────────────────
print("\n=== STORY IMAGE ===")
# Use screenshot 1 as story image (it's the main game view)
story_src = os.path.join(ss_dir, "ITA1.png")
if os.path.exists(story_src):
    img = Image.open(story_src).convert("RGB")
    # Crop to landscape-ish (center crop)
    w, h = img.size
    target_ratio = 4 / 3
    current_ratio = w / h
    if current_ratio < target_ratio:
        new_h = int(w / target_ratio)
        top = (h - new_h) // 2
        img = img.crop((0, top, w, top + new_h))
    else:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        img = img.crop((left, 0, left + new_w, h))
    # Resize to reasonable web size
    img.thumbnail((800, 600), Image.LANCZOS)
    save_webp(img, "story-image.webp", quality=80)

# ── 4. FAVICON (simple SVG instead) ──────────────────
print("\n=== FAVICON ===")
# Create a simple favicon from the logo center
favicon_src = os.path.join(SRC, "Logo 512x512.png")
if os.path.exists(favicon_src):
    fav = Image.open(favicon_src).convert("RGBA")
    fav = fav.resize((64, 64), Image.LANCZOS)
    # Save as PNG for favicon (browsers handle this well)
    fav.save(os.path.join(DST, "favicon.png"), "PNG")
    print("  -> favicon.png (64x64)")

print("\n=== DONE ===")
print(f"All images saved to: {DST}")
