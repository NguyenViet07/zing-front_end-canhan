import {Component, OnInit} from '@angular/core';
import {Song} from '../../song';
import {SongService} from '../../service/song.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {
  song: Song;
  addSongForm: FormGroup;

  constructor(private songService: SongService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addSongForm = this.fb.group({name: [''], description: ['']});
  }

  addSong() {
    this.song = {
      nameSong: this.addSongForm.get('name').value,
      description: 'Hello'
    };

    this.songService.create(this.song).subscribe(() => {
      console.log('Theem thanh cong!');
      location.reload();
    }, error => {
      console.log(error);
    });
  }
}
