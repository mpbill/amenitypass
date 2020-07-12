import {Component, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  start = new FormControl('15:00');
  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  submit(name: string) {
    this.dataService.setSelectedName(name);
    this.dataService.setStartTime(this.start.value);
    this.router.navigate(["/pass"]);
  }

}
