import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  songs = [
    { name: 'Song 1', src: 'assets/song1.mp3' },
    { name: 'Song 2', src: 'assets/song2.mp3' },
    { name: 'Song 3', src: 'assets/song3.mp3' }
];
currentSong: string | undefined;

playSong(src: string): void {
    this.currentSong = src;
}
}
