import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsListComponent } from './transactions-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from '../../search-filter.pipe';

describe('TransactionsListComponent', () => {
  let component: TransactionsListComponent;
  let fixture: ComponentFixture<TransactionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsListComponent, SearchFilterPipe],
      imports: [HttpClientModule],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
