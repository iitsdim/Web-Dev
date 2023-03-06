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
  id: number | undefined;

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
        this.id = +_id;
        this.albumService.getAlbumPhotos(this.id).subscribe((albumPhotos) => {
          this.albumPhotos = albumPhotos;
        });
      }
    });
  }

}
