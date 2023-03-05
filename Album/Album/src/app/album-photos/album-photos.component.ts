import { Component, OnInit } from '@angular/core';
import {AlbumPhoto} from "../album-photo";
import {AlbumService} from "../album.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  albumPhotos: AlbumPhoto[];

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
  ) {
    this.albumPhotos = [];
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id) {
        let id = +_id;
        this.albumService.getAlbumPhotos(id).subscribe((albumPhotos) => {
          this.albumPhotos = albumPhotos;
        });
      }
    });
  }

}
