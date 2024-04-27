// portfolio-detail.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortofolioDetailComponent } from './portfolio-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { LightboxModule } from 'ngx-lightbox';

describe('PortofolioDetailComponent', () => {
  let component: PortofolioDetailComponent;
  let fixture: ComponentFixture<PortofolioDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //declarations: [PortofolioDetailComponent, NavbarComponent, FooterComponent]
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(PortofolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
