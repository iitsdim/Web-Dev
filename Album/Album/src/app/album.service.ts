import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Album } from './album';
import {AlbumPhoto} from "./album-photo";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}/`)
  }

  getAlbumPhotos(id: number): Observable<AlbumPhoto[]> {
    return this.client.get<AlbumPhoto[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }

  createAlbum(title: string) {
    return this.client.post(`https://jsonplaceholder.typicode.com/albums`,
      JSON.stringify({
        title: title,
        userId: 11
      }));
  }

  updateAlbum(album: Album) {
    return this.client.put(`https://jsonplaceholder.typicode.com/albums/${album.id}`,
      JSON.stringify({
        title: album.title,
        id: album.id,
        userId: album.userId
      }));
  }

  deleteAlbum(album: Album) {
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${album.id}`);
  }
}
