import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class DropdownDirective {
  private isOpen = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    const insideClick = this.el.nativeElement.contains(event.target);
    const dropdownMenu = this.getDropdownMenu();

    if (insideClick) {
      this.isOpen = !this.isOpen;
      this.setMenuVisibility(dropdownMenu, this.isOpen);
    } else if (this.isOpen && dropdownMenu) {
      this.isOpen = false;
      this.setMenuVisibility(dropdownMenu, this.isOpen);
    }
  }

  private getDropdownMenu(): HTMLElement | null {
    // Check for different structures and return the dropdown menu
    const btnGroupMenu = this.el.nativeElement.closest('.btn-group')?.querySelector('.dropdown-menu');
    const navItemMenu = this.el.nativeElement.closest('.nav-item')?.querySelector('.dropdown-menu');
    return btnGroupMenu || navItemMenu;
  }

  private setMenuVisibility(menu: HTMLElement | null, show: boolean) {
    if (menu) {
      if (show) {
        this.renderer.addClass(menu, 'show');
      } else {
        this.renderer.removeClass(menu, 'show');
      }
    }
  }
}