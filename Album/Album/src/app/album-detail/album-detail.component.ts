import {Component, OnInit} from '@angular/core';
import { Album } from '../album';
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
  ) {
    this.album = {} as Album;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id) {
        let id = +_id;
        this.albumService.getAlbum(id).subscribe((album) => {
          this.album = album
        });
      }
    });
  }

}
