import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from '../recipes/recipes.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RecipesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
