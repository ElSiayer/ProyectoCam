import { Component, SecurityContext } from '@angular/core';
import { MediaCapture, MediaFile } from "@ionic-native/media-capture/ngx";
import { Plugins, CameraSource, CameraResultType, Filesystem, FilesystemDirectory, Capacitor } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public mediaFile:MediaCapture, private sanitizer: DomSanitizer){}
  public foto: any;
  public ruta: any;
  public xd='content://storage/emulated/0/DCIM/Camera/VID_202019_071432.mp4';
  public cargada = false;
  public carrusel: SafeResourceUrl[]=[] as SafeResourceUrl[];
  public carrusel2: SafeResourceUrl[]=[] as SafeResourceUrl[];
  public  videos:string[]=[]
  imageObject= [{
    video: 'https://youtu.be/tYa6OLQHrEc',
    title: 'Youtube example one with title.',
    alt: 'youtube video'
}]
  title = 'Camara';
  takenPicture: any;
  async capturarVideo(){
   let vid: string
   let aux: any
   const record= await this.mediaFile.captureVideo().then((video:MediaFile[])=>{
      vid=video[0].fullPath;
      console.log(video[0].fullPath)
      console.log(video)
    });
    this.carrusel2.push(this.sanitizer.bypassSecurityTrustUrl(Capacitor.convertFileSrc(vid)))
  }
  async takePicture() {    
    try {
      const image = await Plugins.Camera.getPhoto({
        quality: 90,
        source: CameraSource.Camera,
        saveToGallery: true,
        resultType: CameraResultType.DataUrl
      });

      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      // Can be set to the src of an image now

      let regexpNumber: RegExp = /JPEG.*(.jpg)$/;
      this.cargada = true;
      this.foto = image.path;
      //String a =foto.uri.getPath();

      this.takenPicture = image.webPath;//this.takePicture = imageUrl;
      //this.foto="Pictures/"+this.ruta.substr(this.ruta.search(regexpNumber))
      //this.ruta="file://com.android.externalstorage.documents/document/Pictures/"+this.ruta.substr(this.ruta.search(regexpNumber))
      console.log(this.foto)
      console.log(Capacitor.convertFileSrc(this.foto))
      this.carrusel.push(this.sanitizer.bypassSecurityTrustUrl(image && (image.dataUrl)))
    } catch (error) {
      console.log('prro')

    }
    
    


  }
  async readdir() {
    let aux='file:///storage/emulated/0/DCIM/Camera'
    try {
      let ret = await Filesystem.readdir({
        path: aux,
      }).then(res=>{
        console.log(res.files.length)
      });
    } catch(e) {
      console.error('Unable to read dir', e, aux);
    }
  }
}

