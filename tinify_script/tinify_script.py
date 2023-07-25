import tinify
import os
from PIL import Image

with open('../../tinify_api_key.txt', 'r') as f:
	tinify.key = f.read()
'''
ORIGINAL_IMAGES = '../../fon_verzija_slike/'
COMPRESSED_IMAGES = '../../fon_verzija_slike_compressed/'
image_list = ['04.jpg', '06.jpg']
'''
ORIGINAL_IMAGES = '../../nove_slike_14-07-2023/'
COMPRESSED_IMAGES = '../../nove_slike_14-07-2023_compressed/'
image_list = None


MAX_WIDTH = 1500
# todo: changed .jpg to .jpeg so now it will not work on .jpg

for (dirpath, dirnames, filenames) in os.walk(ORIGINAL_IMAGES):
	for f in filenames:
		if image_list is None and (f.lower().endswith('.jpeg') or f.lower().endswith('.jpg') or f.lower().endswith('.png')) or image_list is not None and f in image_list:  
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
