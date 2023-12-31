import { Component } from '@angular/core';
import { bannerSchema, bannerSchema_1, mainBannerSchema } from 'src/app/schema/homebanner.schema';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { customerSchema } from 'src/app/schema/customer.schema';
import { UtilsService } from '../../services/utils.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent {
  mainBanner:any[]=mainBannerSchema;
  banners:any[] = bannerSchema;
  banners_1:any[] = bannerSchema_1;
  customers:any[] = customerSchema;
  // for main banner

  mainBannerOptions:any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [ '<p class="left" > < </p>', '<p class="right"> > </p>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  // for custome banner
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [ '<p class="left" > < </p>', '<p class="right"> > </p>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor( public readonly utilsService:UtilsService) {}
}
