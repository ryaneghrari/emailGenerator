import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmailGeneratorComponent } from '@pages/email-generator/email-generator.component';


const routes: Routes = [
    { 
        path: '', component: EmailGeneratorComponent
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }