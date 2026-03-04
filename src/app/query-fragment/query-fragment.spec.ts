import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFragment } from './query-fragment';

describe('QueryFragment', () => {
  let component: QueryFragment;
  let fixture: ComponentFixture<QueryFragment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryFragment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryFragment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
