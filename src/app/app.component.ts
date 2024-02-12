import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ServerComponent} from "./server/server.component";
import {ServersComponent} from "./servers/servers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServerComponent, ServersComponent],
  templateUrl: './app.component.html',
  styles:[`.title{
    color:fuchsia
  }`]
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-shwarzmuller';
}
