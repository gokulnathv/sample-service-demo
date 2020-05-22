import { Component, OnInit } from '@angular/core';
import { Config } from './Config';
import { ConfigService } from './config.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [ ConfigService ],
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public vm: any = {};
  private config: Config;
  private srcPoolData = [];

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.showConfig();
  }

  public onAddData() {
    this.srcPoolData.push(this.vm.srcData);
  }

showConfig() {
  this.configService.getConfig()
    .subscribe((data: Config) => {
      this.srcPoolData = data.srcData
    });
}
}
