import { Routes } from '@angular/router';
import { ViewPosts } from './view-posts/view-posts';
import { AddPost } from './add-post/add-post';
import { UpdatePost } from './update-post/update-post';
import { ErrorComponent } from './error-component/error-component';

export const routes: Routes = [
    {path: '', component: ViewPosts},
    {path: 'view', component: ViewPosts},
    {path: 'add', component: AddPost},
    {path: 'update/:id', component: UpdatePost},
    {path: '**', component: ErrorComponent}
];
