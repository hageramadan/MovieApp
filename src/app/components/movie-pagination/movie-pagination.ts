// import { Component, Input, output } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-movie-pagination',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './movie-pagination.html',
//   styleUrls: ['./movie-pagination.css']
// })
// export class PaginationComponent {
//   @Input() currentPage: number = 1;
//   @Input() totalPages: number = 1;
//   pageChange = output<number>();

//   changePage(page: number) {
//     if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
//       this.pageChange.emit(page);
//     }
//   }
//   getPages(): number[] {
//   const pages: number[] = [];
//   const start = Math.max(2, this.currentPage - 2);
//   const end = Math.min(this.totalPages - 1, this.currentPage + 2);

//   for (let i = start; i <= end; i++) {
//     pages.push(i);
//   }

//   return pages;
// }
// }

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-pagination.html',
  styleUrls: ['./movie-pagination.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }

  getPages(): number[] {
    const pages: number[] = [];
    const start = Math.max(2, this.currentPage - 2);
    const end = Math.min(this.totalPages - 1, this.currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }
}



