import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { UsersComponent } from './users.component';
import { UserService } from './shared/user.service';
import { usersMock } from './mocks/user.mock';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUsers: () => of(usersMock), // mock via observables
          },
        },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list users', () => {
    const users: HTMLElement[] = fixture.nativeElement.querySelectorAll('li');
    expect(users.length).toBe(2);

    users.forEach((user, index) => {
      expect(user.textContent).toContain(usersMock[index].name);
    });
  });
});
