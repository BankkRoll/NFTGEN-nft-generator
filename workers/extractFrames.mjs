import sharp from 'sharp';
import { loadImage } from 'canvas';
import fs from 'fs';

export async function extractFrames(gifPath) {
    try {
        // Check if the GIF file exists
        if (!fs.existsSync(gifPath)) {
            console.error(`File does not exist at path: ${gifPath}`);
            return [];
        }

        // Attempt to get the metadata of the GIF
        const metadata = await sharp(gifPath).metadata();

        // Check if the pages property exists in the metadata
        if (!metadata || !metadata.pages) {
            console.error(`Unable to find pages property in metadata for file at path: ${gifPath}`);
            return [];
        }

        // Generate an array of all the frame-loading promises
        const framePromises = Array.from({ length: metadata.pages }, (_, i) =>
            sharp(gifPath, { page: i }).png().toBuffer()
        );

        // Wait for all the frame-loading promises to resolve
        const frameBuffers = await Promise.all(framePromises);

        // Generate an array of all the image-loading promises
        const imagePromises = frameBuffers.map(frameBuffer =>
            frameBuffer ? loadImage(frameBuffer) : null
        );

        // Wait for all the image-loading promises to resolve
        const frameImages = await Promise.all(imagePromises);

        return frameImages.filter(img => img !== null);
    } catch (err) {
        console.error(`Failed to extract frames from file at path: ${gifPath}. Error: ${err.message}`);
        return [];
    }
}
