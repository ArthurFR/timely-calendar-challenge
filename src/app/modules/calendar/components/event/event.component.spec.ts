import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return none in the getImageUrl function', () => {
    component.image = undefined;
    const url = component.getImageUrl();
    expect(url).toBe('none');
  });

  it('should return url(foo) in the getImageUrl function', () => {
    component.image = {
      medium: { url: 'foo', width: 1, height: 2 },
      small: { url: 'foo', width: 1, height: 2 },
      full: { url: 'foo', width: 1, height: 2 }
    };
    const url = component.getImageUrl();
    expect(url).toBe('url(foo)');
  });
});
