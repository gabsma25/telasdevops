// app.routes.ts

// Importa o tipo Routes do Angular Router, que é utilizado para definir um array de rotas.
import { Routes } from '@angular/router';

// Importa os componentes que serão exibidos quando o usuário acessar as respectivas rotas.
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

// Define o array de rotas da aplicação.
export const routes: Routes = [
    // Rota padrão (vazia). Quando o caminho é vazio (''), redireciona o usuário para a rota 'login'.
    // O pathMatch: 'full' define como o Angular deve combinar a URL atual do navegador com o caminho (ou path) da rota.
    // A URL precisa ser exatamente igual ao caminho definido (neste caso, vazia) para que o redirecionamento ocorra.
    { path: '', pathMatch: "full", redirectTo: 'login' },

    // Rota para o caminho 'login', que renderiza o LoginComponent.
    { path: 'login', component: LoginComponent },

    // Rota para o caminho 'home', que renderiza o HomeComponent.
    { path: 'home', component: HomeComponent },
];
