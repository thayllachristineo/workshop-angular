import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent; // é o próprio componente
  let fixture: ComponentFixture<HomeComponent>; // para ter acesso total ao componente

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents(); // compila o componente

    fixture = TestBed.createComponent(HomeComponent); // recebe o componente
    component = fixture.componentInstance; // instância do componente
    fixture.detectChanges(); // detectar as mudanças do HTML
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    const header: HTMLElement = fixture.nativeElement.querySelector('header');
    expect(header.textContent).toContain('Workshop Angular');
  });
});
