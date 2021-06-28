import { Component, ElementRef, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public launchYear = [];

  public imageSource = [];

  public missionDetails = [];

  private missionData;

  private launchData;

  private landingData;

  public missionFlag = false;

  public launchSuccessArray = [];

  public launchFailed = [];

  public launchFlag = false;

  public toggle = true;

  constructor(private productsService: ProductsService, private ele: ElementRef) {
  }

  ngOnInit() {
    this.getProducts();
  }

  /**
   * To get the products from DB
   *
   * memberof AddProductComponent
   */
  getProducts() {
    this.launchYear = [];
    this.imageSource = [];
    this.productsService.getProducts().subscribe((data) => {
      this.missionFlag = true;
      this.missionData = data;
      this.missionData.forEach(element => {
        if (this.launchYear.indexOf(element.launch_year) === -1) {
          this.launchYear.push(element.launch_year);
          this.imageSource.push(element.links.mission_patch_small);
        }
      });
    }, (error) => {
      console.log(error);
    });
  }

  /**
   * To select the mission based on year selected
   *
   * memberof AddProductComponent
   */
  selectMission(year) {
    this.missionDetails = [];
    this.missionFlag = false;
    this.productsService.getProducts().subscribe((data) => {
      this.missionData = data;
      this.missionData.forEach(element => {
        if (year === element.launch_year) {
          this.missionDetails.push(element);
        }
      }, (error) => {
        console.log(error);
      });
    });
  }

  /**
   * To fetch lauch success mission
   *
   * memberof AddProductComponent
   */
  launchSuccess(value) {
    this.missionDetails = [];
    this.missionFlag = false;
    this.productsService.getLaunchDetails().subscribe((data) => {
      this.launchData = data;
      console.log(this.launchData);
      this.launchData.forEach(element => {
        if (value === element.launch_success) {
          this.missionDetails.push(element);
        }
      });
    }, (error) => {
      console.log(error);
    });
  }


  /**
   * To fetch lauch failed mission
   *
   * memberof AddProductComponent
   */
  launchFailure(value) {
    this.missionDetails = [];
    this.productsService.getLaunchDetails().subscribe((data) => {
      this.launchData = data;
      this.missionFlag = false;
      this.launchData.forEach(element => {
        if (value === element.launch_success) {
          this.missionDetails.push(element);
        }
      });
    }, (error) => {
      console.log(error);
    });
  }

  /**
   * To fetch land success mission
   *
   * memberof AddProductComponent
   */
  landingSuccess(value) {
    this.missionDetails = [];
    this.productsService.getLandingDetails().subscribe((data) => {
      this.landingData = data;
      this.missionFlag = false;
      this.landingData.forEach(element => {
        if (value === element.land_success) {
          this.missionDetails.push(element);
        }
      });
    }, (error) => {
      console.log(error);
    });
  }

  /**
   * To fetch land failed mission
   *
   * memberof AddProductComponent
   */
  landingFailure(value) {
    this.missionDetails = [];
    this.productsService.getLandingDetails().subscribe((data) => {
      this.landingData = data;
      this.missionFlag = false;
      this.landingData.forEach(element => {
        if (value === element.land_success) {
          this.missionDetails.push(element);
        }
      });
    }, (error) => {
      console.log(error);
    });
  }
}
