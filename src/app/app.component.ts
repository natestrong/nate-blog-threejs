import {Component} from '@angular/core';
import {ThreeSceneComponent} from './three-scene/three-scene.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThreeSceneComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nate-blog-threejs';
}
