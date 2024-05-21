import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfoComponent } from './elfo.component';

describe('ElfoComponent', () => {
  let component: ElfoComponent;
  let fixture: ComponentFixture<ElfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
