import sharp from 'sharp';
import { loadImage } from 'canvas';

export async function extractFrames(gifPath) {
    const { pages } = await sharp(gifPath).metadata();
    const frameImages = [];

    for (let i = 0; i < pages; i++) {
        const frameBuffer = await sharp(gifPath, { page: i }).png().toBuffer();
        const img = await loadImage(frameBuffer);
        frameImages.push(img);
    }

    return frameImages;
}

