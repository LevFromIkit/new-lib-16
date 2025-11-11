import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiLib } from './testi-lib';

describe('TestiLib', () => {
  let component: TestiLib;
  let fixture: ComponentFixture<TestiLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestiLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestiLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
