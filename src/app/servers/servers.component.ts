import {Component, OnInit} from '@angular/core';
import {ServerComponent} from "../server/server.component";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  //  selector: '.app-servers',
  selector: 'app-servers',
  //  selector: '[app-servers]',
  standalone: true,
  imports: [
    ServerComponent,
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server created';
  serverName ='TEST';
  serverCreated = null;
  servers = ['Test server', 'Test server 2'];

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer(e) {
    console.log(e);
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'server created. Name is '+this.serverName;
  }

  onUpdateServerName(event:Event){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }



}
