import { Component, inject } from '@angular/core';
import { PollingService } from '../services/polling.service';
import { JsonPipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-polling',
  imports: [JsonPipe],
  templateUrl: './polling.component.html',
  styleUrl: './polling.component.scss'
})
export class PollingComponent {

  data: any;
  private destroy$ = new Subject<void>();

  dataService= inject(DataService);
  posts: any[] = [];
  errorMessage: string = '';

  constructor(private pollingService: PollingService) { }

  ngOnInit() {
    // commented polling usecase
    // this.pollingService.startPolling(60000).pipe(
    //   takeUntil(this.destroy$)
    // ).subscribe((response)=>{
    //   this.data= response;
    //   console.log('Polled Data', this.data);
    // })

    this.loadPosts();
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPosts(): void {
    this.dataService.getPosts().subscribe({
      next: (posts:any)=>{
        this.posts= posts;
        console.log('Posts', this.posts); 
      },
      error: (error)=>{
        this.errorMessage= error;
        console.error('Error', this.errorMessage);
      }
    });
  }

}
