import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-new-damage',
  templateUrl: './new-damage.component.html',
  styleUrls: ['./new-damage.component.css']
})

export class NewDamageComponent implements OnInit {
  @Input()
  url: string = "http://127.0.0.1:4000/";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
