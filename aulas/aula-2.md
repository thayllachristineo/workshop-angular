# Roteamento avançado com RxJS

- Repositório do projeto: https://github.com/andrewarosario/workshop-angular
- API que vamos utilizar: https://65009f9718c34dee0cd53786.mockapi.io/users
- Criando nosso modelo: https://transform.tools/json-to-typescript

### Criando UserService

```typescript
@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: string) {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
```

### Com grandes poderes vem grandes responsabilidades
Sempre que possível, tente **evitar** o subscribe no componente!

```html
<router-outlet />

<ul>
  @for(user of users$ | async; track user.id) {
	  <li>
	    <a [routerLink]="[user.id]">{{ user.name }}</a>
	  </li>
  }
</ul>
```
Saiba mais sobre @for: https://angular.io/guide/control_flow#for-block---repeaters

### Criando componente de detalhe do usuário

```html
<div *ngIf="user$ | async as user">
  <h2>{{ user.name }}</h2>
  <img [src]="user.avatar" [alt]="user.name" />
  <p>Email: {{ user.email }}</p>
  <p>Biography: {{ user.biography }}</p>
  <p>ID: {{ user.id }}</p>
</div>
```