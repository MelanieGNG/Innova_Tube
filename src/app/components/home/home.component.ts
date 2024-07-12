import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  favorites: any[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
  }

  search(query: string): void {
    this.videoService.searchVideos(query).subscribe(response => {
      this.videos = response.items;
    });
  }

  addToFavorites(video: any): void {
    this.favorites.push(video);
    // Puedes almacenar los favoritos en localStorage o en una base de datos
  }
}
