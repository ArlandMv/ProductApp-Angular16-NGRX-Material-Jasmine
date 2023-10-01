import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the navbar', () => {
    expect(component).toBeTruthy();
  });

  it('should render navbar title', () => {
    const toolbarElement: HTMLElement =
      fixture.nativeElement.querySelector('mat-toolbar');
    expect(toolbarElement).toBeTruthy();

    const spanElement: HTMLSpanElement | null =
      toolbarElement.querySelector('span');
    expect(spanElement).toBeTruthy();
    expect(spanElement!.textContent).toContain('Product App');
  });
});
