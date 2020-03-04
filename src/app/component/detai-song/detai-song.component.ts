import {Component, OnInit} from '@angular/core';
import {Song} from '../../song';
import {Subscribable, Subscription} from 'rxjs';
import {SongService} from '../../service/song.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-detai-song',
  templateUrl: './detai-song.component.html',
  styleUrls: ['./detai-song.component.scss']
})
export class DetaiSongComponent implements OnInit {
  song: Song;
  sub: Subscription;

  constructor(private songService: SongService,
              private activatedRouter: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit() {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.songService.detail(id).subscribe(next => {
        this.song = next;
      }, error => {
        console.log(error);
      });
    });
  }

  delete(id) {
    this.songService.delete(id).subscribe(() => {
      alert('xoa thanh cong');
      this.route.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }
}
