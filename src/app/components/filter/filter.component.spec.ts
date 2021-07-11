import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should emit on change', () => {
    // spy on event emitter
    const component = fixture.componentInstance;
    spyOn(component.inputChange, 'emit');
    const event = new KeyboardEvent('keyup', {
      bubbles: true, cancelable: true, shiftKey: false
    });
    const nativeElement = fixture.nativeElement;
    const inputEl = nativeElement.querySelector('input');
    inputEl.value = '300';
    const inputText = fixture.nativeElement.querySelector('input').value;
    inputEl.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.inputChange.emit).toHaveBeenCalled();
  });
});
