import { Component, OnInit } from '@angular/core';
import { Announcement } from './announcements';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
  providers: [AnnouncementService]
})
export class AnnouncementsComponent implements OnInit {

  constructor(private announcementService: AnnouncementService) { }

  announcements: Announcement[];

  ngOnInit(): void {

    this.announcementService.getAnnouncements().subscribe(data => {
      this.announcements = data;
    });
  }
  remove() {
    //doldurulacak
  }
}
