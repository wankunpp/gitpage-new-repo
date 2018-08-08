import { Component, OnInit ,TemplateRef} from '@angular/core';
import {Images} from './portfolio.model';
import {images_data} from './portfolio.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  selectedImage:Images;
  modalRef: BsModalRef;

  public images: Images[] = images_data;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openImage(template:TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  
}
