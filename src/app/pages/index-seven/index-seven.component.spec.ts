import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexSevenComponent } from './index-seven.component';
import { SharedModule } from '../../shared/shared.module';


describe('IndexSevenComponent', () => {
  let component: IndexSevenComponent;
  let fixture: ComponentFixture<IndexSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //declarations: [IndexSevenComponent]
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(IndexSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
