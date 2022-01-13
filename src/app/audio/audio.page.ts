import { Component, OnInit } from '@angular/core';
import { MediaCapture, MediaFile, CaptureAudioOptions } from '@ionic-native/media-capture/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {

  audio: any;
  keys: string[] = [];

  constructor(
    private media:MediaCapture,
    private opener:FileOpener 

  ) { }

  ngOnInit() {
  }
// J'ai essayer d'utiliser la fonction native pour les audios mais j'ai l'impression qui veut que j'utilise un émulateur/téléphone pour cela 
  enregistrementAudio(){
    var option:CaptureAudioOptions ={
      limit:1
    }
    this.media.captureAudio(option).then(
      (mediaFile: MediaFile[]) =>{
        this.audio = mediaFile[0];
        this.keys = Object.keys(this.audio);
      }
    )

  }

  play(){
    this.opener.open(this.audio.fullPath, "audio/mpeg");
  }
}
