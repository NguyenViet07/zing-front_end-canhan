import {Component, OnInit} from '@angular/core';
import {Song} from '../../song';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SongService} from '../../service/song.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
  song: Song;
  idSong: any;
  sub: Subscription;
  editSongForm: FormGroup;

  constructor(private songService: SongService,
              private fb: FormBuilder,
              private activatedRouter: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.songService.detail(id).subscribe(next => {
        this.song = next;
        this.idSong = next.id;
      }, error => {
        console.log(error);
      });
    });
    this.editSongForm = this.fb.group({name: [''], description: ['']});
  }

  editSong() {
    this.song = {
      nameSong: this.editSongForm.get('name').value,
      description: this.editSongForm.get('description').value
    };
    this.songService.edit(this.idSong, this.song).subscribe(() => {
      console.log('thanh cong');
    }, error => {
      console.log(error);
    });
  }
}
