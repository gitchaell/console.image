type LoadOptions = {
  size?: number;
  color?: string;
};

class ConsoleImage {
  private static DEFAULT_SIZE = 320;
  private static DEFAULT_COLOR = 'transparent';
  private static MAX_FIREFOX_SIZE = 8192;

  static async load(imageUrl: string, options: LoadOptions = {}): Promise<void> {
    const size = options.size ?? this.DEFAULT_SIZE;
    const color = options.color ?? this.DEFAULT_COLOR;

    try {
      const blob = await this.fetchImageBlob(imageUrl);
      this.validateImage(blob);
      const dataUrl = await this.convertBlobToDataUrl(blob);
      this.logImageToConsole(dataUrl, size, color);
    } catch (error: any) {
      console.warn(error.message);
    }
  }

  private static async fetchImageBlob(url: string): Promise<Blob> {
    const response = await fetch(url);
    return response.blob();
  }

  private static validateImage(blob: Blob): void {
    if (!blob.type.startsWith('image')) {
      throw new Error('Valid image not found.');
    }

    const isFirefox = navigator.userAgent.includes('Firefox');
    if (isFirefox && blob.size > this.MAX_FIREFOX_SIZE) {
      throw new Error('Image size too big to be displayed in Firefox.');
    }
  }

  private static convertBlobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('Failed to read image data.'));
      reader.readAsDataURL(blob);
    });
  }

  private static logImageToConsole(dataUrl: string, size: number, color: string): void {
    const style = `
      background: url('${dataUrl}') left top no-repeat;
      font-size: ${size}px;
      background-size: contain;
      background-color: ${color};
    `.trim();

    console.log('%c     ', style);
  }
}

export default ConsoleImage;
