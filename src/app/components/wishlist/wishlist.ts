import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  movies = [
    {
      title: 'Black Widow',
      date: 'Sep 25, 2017',
      rating: 9288,
      description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by...',
      poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnOT8UPTx6xk84_gQIsBuesYHSvcuy6sa0wisMo7zeeJl1Xw3UfewVZQnO-WICSt4eRZx7iFbuXe2tj52N85uPPiW2-srhao4rrI6T49tcnEruvYxo97UJaC_c_Qgekoghuk1XByyPoFqVvEY9vQFxmqVNEcGZAtSqnAF6kMSvIaXqUpOgj2px_cObNSS7xz_zFm33fNhiGtbFcQEILMdV0Y459ITbtVGnWAsxp7WXxW3yHT4-XTIC5OD6tyZyZDSuEtpYXyIXLj3Y',
    },
    {
      title: 'Black Widow',
      date: 'Sep 25, 2017',
      rating: 9288,
      description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by...',
      poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnOT8UPTx6xk84_gQIsBuesYHSvcuy6sa0wisMo7zeeJl1Xw3UfewVZQnO-WICSt4eRZx7iFbuXe2tj52N85uPPiW2-srhao4rrI6T49tcnEruvYxo97UJaC_c_Qgekoghuk1XByyPoFqVvEY9vQFxmqVNEcGZAtSqnAF6kMSvIaXqUpOgj2px_cObNSS7xz_zFm33fNhiGtbFcQEILMdV0Y459ITbtVGnWAsxp7WXxW3yHT4-XTIC5OD6tyZyZDSuEtpYXyIXLj3Y',
    },
    {
      title: 'Black Widow',
      date: 'Sep 25, 2017',
      rating: 9288,
      description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by...',
      poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnOT8UPTx6xk84_gQIsBuesYHSvcuy6sa0wisMo7zeeJl1Xw3UfewVZQnO-WICSt4eRZx7iFbuXe2tj52N85uPPiW2-srhao4rrI6T49tcnEruvYxo97UJaC_c_Qgekoghuk1XByyPoFqVvEY9vQFxmqVNEcGZAtSqnAF6kMSvIaXqUpOgj2px_cObNSS7xz_zFm33fNhiGtbFcQEILMdV0Y459ITbtVGnWAsxp7WXxW3yHT4-XTIC5OD6tyZyZDSuEtpYXyIXLj3Y',
    },
    {
      title: 'Black Widow',
      date: 'Sep 25, 2017',
      rating: 9288,
      description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by...',
      poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnOT8UPTx6xk84_gQIsBuesYHSvcuy6sa0wisMo7zeeJl1Xw3UfewVZQnO-WICSt4eRZx7iFbuXe2tj52N85uPPiW2-srhao4rrI6T49tcnEruvYxo97UJaC_c_Qgekoghuk1XByyPoFqVvEY9vQFxmqVNEcGZAtSqnAF6kMSvIaXqUpOgj2px_cObNSS7xz_zFm33fNhiGtbFcQEILMdV0Y459ITbtVGnWAsxp7WXxW3yHT4-XTIC5OD6tyZyZDSuEtpYXyIXLj3Y',
    },
  ];
}
