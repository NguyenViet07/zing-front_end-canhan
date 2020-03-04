import {Component, OnInit} from '@angular/core';
import {Song} from '../../song';
import {HttpClient} from '@angular/common/http';
import {SongService} from '../../service/song.service';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss']
})
export class ListSongComponent implements OnInit {
  private songs: Song[];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.songService.getListSong().subscribe(reaul => {
      this.songs = reaul;
    });
  }

}
