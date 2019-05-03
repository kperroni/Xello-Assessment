import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipcontentComponent } from './tooltipcontent.component';

describe('TooltipcontentComponent', () => {
  let component: TooltipcontentComponent;
  let fixture: ComponentFixture<TooltipcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
