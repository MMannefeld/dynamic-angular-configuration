import { Component, OnInit } from '@angular/core';
import { ForRootStaticService } from './for-root-static.service';

@Component({
  selector: 'app-for-root-static',
  templateUrl: './for-root-static.component.html',
  styleUrls: ['./for-root-static.component.scss'],
})
export class ForRootStaticComponent implements OnInit {
  dataFromParentModule = '';

  constructor(private forRootStaticService: ForRootStaticService) {}

  ngOnInit(): void {
    this.dataFromParentModule =
      this.forRootStaticService.getDataFromParentModule();
  }
}
