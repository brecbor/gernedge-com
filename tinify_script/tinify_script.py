import tinify
import os
from PIL import Image

with open('../../tinify_api_key.txt', 'r') as f:
	tinify.key = f.read()

ORIGINAL_IMAGES = '../../original_images/'
COMPRESSED_IMAGES = '../../compressed_images/'

MAX_WIDTH = 1500


for (dirpath, dirnames, filenames) in os.walk(ORIGINAL_IMAGES):
	for f in filenames:
		if f.endswith('.jpg') or f.endswith('.png'):
			image = Image.open(f'{dirpath}/{f}')
			if(image.size[0] < MAX_WIDTH):
				print(f'compressing file {dirpath}/{f} (width: {image.size[0]}, height: {image.size[1]})')
				source = tinify.from_file(f'{dirpath}/{f}')
				source.to_file(f'{COMPRESSED_IMAGES}{dirpath[len(ORIGINAL_IMAGES):]}/{f}')
			else:
				print(f'compressing and resizing file {dirpath}/{f} (width: {image.size[0]}, height: {image.size[1]})')

				source = tinify.from_file(f'{dirpath}/{f}')
				resized = source.resize(
				    method="scale",
				    width=MAX_WIDTH
				)
				resized.to_file(f'{COMPRESSED_IMAGES}{dirpath[len(ORIGINAL_IMAGES):]}/{f}')
