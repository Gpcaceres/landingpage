import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body } from './body';

describe('Body', () => {
  let component: Body;
  let fixture: ComponentFixture<Body>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Body]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Body);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit openContact when the contact button is clicked', () => {
    spyOn(component.openContact, 'emit');

    const button: HTMLButtonElement | null = fixture.nativeElement.querySelector('.btn.btn-secondary');
    expect(button).not.toBeNull();
    button?.click();

    expect(component.openContact.emit).toHaveBeenCalled();
  });
});
