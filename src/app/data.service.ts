import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private currentDate = new BehaviorSubject<moment.Moment>(moment());
  private selectedName = new BehaviorSubject<string>("Michael Billingham");
  public selectedName$ = this.selectedName.asObservable();
  private startTime = new BehaviorSubject<moment.Moment>(moment());
  public startTime$ = this.startTime.asObservable().pipe(map(d => d.format("LT")));
  public endTime$ = this.startTime.asObservable().pipe(map(d => moment(d).add("hours", 2).format("LT")));
  public currentDateString$ = this.currentDate.asObservable().pipe(map(d => d.format('ddd MMM D YYYY').toUpperCase()));
  public yesterdayDateString$ = this.currentDate.asObservable().pipe(map(d => moment(d).subtract("days", 1).format('ddd MMM D YYYY').toUpperCase()));

  constructor() {
  }
  public setStartTime(time: string) {
    console.log(time);
    this.startTime.next(moment(time, "H:mm"));
  }
  public setSelectedName(name: string) {
    this.selectedName.next(name);
  }

}
