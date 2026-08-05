#!/usr/bin/env python3
"""Convert large PNG/JPG images to WebP format for faster loading."""

from PIL import Image
import os
import re
from pathlib import Path

# Directory containing images
images_dir = Path("c:/Users/stisl/Desktop/Baobab-Bites-Cafe/images")
project_dir = Path("c:/Users/stisl/Desktop/Baobab-Bites-Cafe")

# Threshold: convert images larger than 200KB
SIZE_THRESHOLD = 200 * 1024  # 200KB

# Track conversions for updating HTML
conversions = {}

print("Converting large images to WebP format...")

# Convert PNG and JPG files
for image_file in images_dir.glob("*"):
    if image_file.suffix.lower() not in [".png", ".jpg", ".jpeg"]:
        continue
    
    if image_file.stat().st_size > SIZE_THRESHOLD:
        webp_file = image_file.with_suffix(".webp")
        
        # Skip if already has a webp version
        if webp_file.exists():
            print(f"✓ WebP already exists: {image_file.name} -> {webp_file.name}")
            conversions[image_file.name] = webp_file.name
            continue
        
        try:
            # Open and convert
            with Image.open(image_file) as img:
                # Convert RGBA to RGB if needed for better compression
                if img.mode in ("RGBA", "LA", "P"):
                    rgb_img = Image.new("RGB", img.size, (255, 255, 255))
                    rgb_img.paste(img, mask=img.split()[-1] if img.mode in ("RGBA", "LA") else None)
                    rgb_img.save(webp_file, "WEBP", quality=85, method=6)
                else:
                    img.save(webp_file, "WEBP", quality=85, method=6)
            
            original_size = image_file.stat().st_size / (1024 * 1024)  # MB
            new_size = webp_file.stat().st_size / (1024 * 1024)  # MB
            reduction = (1 - new_size / original_size) * 100
            
            print(f"✓ Converted: {image_file.name} ({original_size:.2f}MB) -> {webp_file.name} ({new_size:.2f}MB, -{reduction:.1f}%)")
            conversions[image_file.name] = webp_file.name
            
        except Exception as e:
            print(f"✗ Error converting {image_file.name}: {e}")

print(f"\n{len(conversions)} images converted successfully")

if conversions:
    print("\nUpdating HTML files...")
    
    # Update HTML files
    html_files = project_dir.glob("*.html")
    
    for html_file in html_files:
        content = html_file.read_text(encoding="utf-8")
        original_content = content
        
        for old_name, new_name in conversions.items():
            # Create patterns to match different reference formats
            patterns = [
                f'src="images/{re.escape(old_name)}"',
                f"src='images/{re.escape(old_name)}'",
                f'href="images/{re.escape(old_name)}"',
                f"href='images/{re.escape(old_name)}'",
            ]
            
            for pattern in patterns:
                content = re.sub(
                    pattern,
                    lambda m: m.group(0).replace(old_name, new_name),
                    content
                )
        
        if content != original_content:
            html_file.write_text(content, encoding="utf-8")
            print(f"  Updated: {html_file.name}")
    
    print("\n✓ All HTML files updated!")
    print("\nNext steps:")
    print("1. Test the website in your browser")
    print("2. Delete old image files when ready: git rm images/<filename>")
    print("3. Commit changes: git add -A && git commit -m 'Convert images to WebP for faster loading'")
    print("4. Push changes: git push origin main")
