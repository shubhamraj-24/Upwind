import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexSixComponent } from './index-six.component';
import { SharedModule } from '../../shared/shared.module';

describe('IndexSixComponent', () => {
  let component: IndexSixComponent;
  let fixture: ComponentFixture<IndexSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //declarations: [IndexSixComponent]
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(IndexSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
