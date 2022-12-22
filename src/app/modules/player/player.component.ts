import { Component, OnInit } from '@angular/core';
import { FileType } from 'src/app/models/file-type.model';
import { GetPlaylistService } from 'src/app/services/get-playlist.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  files: FileType | undefined;

  constructor(private getPlaylistService: GetPlaylistService) {}

  ngOnInit() {
    this.files = this.getPlaylistService.files;

    document.addEventListener(
      'play',
      function (e) {
        let audios = document.getElementsByTagName('audio');
        for (let i = 0, len = audios.length; i < len; i++) {
          if (audios[i] != e.target) {
            audios[i].pause();
          }
        }
      },
      true
    );
  }
}
