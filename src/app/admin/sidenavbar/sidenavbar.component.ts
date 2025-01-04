import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.scss'
})
export class SidenavbarComponent {
  categoriesVisible: boolean = false;
  personVisible: boolean = false;
  pagesVisible: boolean = false;
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleCategories() {
    try {
      //  console.log("hi");
      this.categoriesVisible = !this.categoriesVisible;
    } catch (error) {
      console.log(error);
    }
  }
  togglePerson() {
    try {
      this.personVisible = !this.personVisible;
    } catch (error) {
      console.log(error);
    }
  }
  togglePages() {
    try {
      this.pagesVisible = !this.pagesVisible;
    } catch (error) {
      console.log(error);
    }
  }

}
