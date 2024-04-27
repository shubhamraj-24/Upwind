import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexFourComponent } from './index-four.component';
import { SharedModule } from '../../shared/shared.module';

describe('IndexFourComponent', () => {
  let component: IndexFourComponent;
  let fixture: ComponentFixture<IndexFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //declarations: [IndexFourComponent]
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(IndexFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
