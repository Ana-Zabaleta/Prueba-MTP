import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent implements OnInit {
  items: MenuItem[] | undefined;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Imagen 1',
        command: () => this.navigateTo('pagina1'),
      },
      {
        label: 'Imagen 2',
        command: () => this.navigateTo('pagina2'),
      },
      {
        label: 'Imagen 3',
        command: () => this.navigateTo('pagina3'),
      },
    ];
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
