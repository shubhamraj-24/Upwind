import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexThreeComponent } from './index-three.component';
import { SharedModule } from '../../shared/shared.module';


describe('IndexThreeComponent', () => {
  let component: IndexThreeComponent;
  let fixture: ComponentFixture<IndexThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //declarations: [IndexThreeComponent]
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(IndexThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
