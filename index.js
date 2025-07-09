class ConsoleImage{static DEFAULT_SIZE=320;static DEFAULT_COLOR="transparent";static MAX_FIREFOX_SIZE=8192;static async load(t,a={}){let e=a.size??this.DEFAULT_SIZE,o=a.color??this.DEFAULT_COLOR;try{let i=await this.fetchImageBlob(t);this.validateImage(i);let s=await this.convertBlobToDataUrl(i);this.logImageToConsole(s,e,o)}catch(l){console.warn(l.message)}}static async fetchImageBlob(t){let a=await fetch(t);return a.blob()}static validateImage(t){if(!t.type.startsWith("image"))throw Error("Valid image not found.");let a=navigator.userAgent.includes("Firefox");if(a&&t.size>this.MAX_FIREFOX_SIZE)throw Error("Image size too big to be displayed in Firefox.")}static convertBlobToDataUrl(t){return new Promise((a,e)=>{let o=new FileReader;o.onload=()=>a(o.result),o.onerror=()=>e(Error("Failed to read image data.")),o.readAsDataURL(t)})}static logImageToConsole(t,a,e){let o=`
      background: url('${t}') left top no-repeat;
      font-size: ${a}px;
      background-size: contain;
      background-color: ${e};
    `.trim();console.log("%c     ",o)}}export default ConsoleImage;
