import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilDestroyedExampleComponent } from './take-until-destroyed-example.component';

describe('TakeUntilDestroyedExampleComponent', () => {
  let component: TakeUntilDestroyedExampleComponent;
  let fixture: ComponentFixture<TakeUntilDestroyedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeUntilDestroyedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeUntilDestroyedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
