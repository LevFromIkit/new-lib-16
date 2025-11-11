import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ppppppp } from './ppppppp';

describe('Ppppppp', () => {
  let component: Ppppppp;
  let fixture: ComponentFixture<Ppppppp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ppppppp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ppppppp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
