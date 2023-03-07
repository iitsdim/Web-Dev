import { Component } from '@angular/core';
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums-crud-page',
  templateUrl: './albums-crud-page.component.html',
  styleUrls: ['./albums-crud-page.component.css']
})
export class AlbumsCrudPageComponent {
  title: string
  constructor(
    private albumService: AlbumService
  ) {
    this.title = "";
  }

  addAlbum() {
    if (!this.title)
      return
    console.log(this.albumService.createAlbum(this.title));
    this.title = "";
  }
}
