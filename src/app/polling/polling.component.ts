import { Component } from '@angular/core';
import { PollingService } from '../services/polling.service';
import { JsonPipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-polling',
  imports: [JsonPipe],
  templateUrl: './polling.component.html',
  styleUrl: './polling.component.scss'
})
export class PollingComponent {

  data: any;
  private destroy$ = new Subject<void>();


  constructor(private pollingService: PollingService) { }

  ngOnInit() {
    this.pollingService.startPolling(60000).pipe(
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      this.data= response;
      console.log('Polled Data', this.data);
    })
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

}
