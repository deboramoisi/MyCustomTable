import { Component } from '@angular/core';
import ButtonSettings from './table/models/ButtonSettings';
import ColumnSetting, { PipeFormat } from './table/models/ColumnSettings';
import Swal from 'sweetalert2';

interface Transaction {
  date: string;
  amount: number;
  customer: string;
  discount: number;
}

interface Customer {
  name: string;
  email: string;
  phone: string;
  loyaltyReward: boolean;
  totalSpent: number;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCustomTable';

  transactions: Transaction[] = [
    {
      date: '2021-02-11T08:07:22',
      amount: 60000,
      customer: 'Debora Moisi',
      discount: 3,
    },
    {
      date: '2021-02-11T08:07:22',
      amount: 300,
      customer: 'Bogdan Groza',
      discount: 0,
    },
    {
      date: '2021-02-11T08:07:22',
      amount: 25000,
      customer: 'Foltut Ana',
      discount: 1,
    },
    {
      date: '2021-02-11T08:07:22',
      amount: 100000,
      customer: 'Paula Sirb',
      discount: 4,
    },
    {
      date: '2021-02-11T08:07:22',
      amount: 1000,
      customer: 'Hannah Illyes',
      discount: 0,
    },
  ];

  transactionTableSettings: ColumnSetting[] = [
    {
      primaryKey: 'date',
      header: 'Date',
      format: PipeFormat.DATE,
    },
    {
      primaryKey: 'amount',
      header: 'Amount',
      format: PipeFormat.CURRENCY,
    },
    {
      primaryKey: 'customer',
      header: 'Customer Name',

    },
    {
      primaryKey: 'discount',
      header: 'Discount',
      format: PipeFormat.PERCENTAGE,
    },
  ];

  customers: Customer[] = [
    {
      name: 'Bogdan Groza',
      email: 'bogdan@invalid.com',
      phone: '0744111222',
      loyaltyReward: true,
      totalSpent: 400,
    },
    {
      name: 'Debora Moisi',
      email: 'debora@invalid.com',
      phone: '0788999666',
      loyaltyReward: true,
      totalSpent: 450000,
    },
    {
      name: 'Dorita Pustea',
      email: 'dorita@invalid.com',
      phone: '0766333777',
      loyaltyReward: false,
      totalSpent: 59000,
    },
    {
      name: 'Hannah Illyes',
      email: 'hannah@invalid.com',
      phone: '0799666333',
      loyaltyReward: false,
      totalSpent: 200,
    },
    {
      name: 'Foltut Ana',
      email: 'ana@invalid.com',
      phone: '0732145678',
      loyaltyReward: true,
      totalSpent: 120000,
    },
    {
      name: 'Sarah Sirb',
      email: 'paula@invalid.com',
      phone: '0788444692',
      loyaltyReward: true,
      totalSpent: 3490000,
    }
  ];

  customerTableSettings: ColumnSetting[] = [
    {
      primaryKey: 'name',
      header: 'Full Name',
    },
    {
      primaryKey: 'email',
      header: 'Email',
    },
    {
      primaryKey: 'phone',
      header: 'Phone Number',
    },
    {
      primaryKey: 'loyaltyReward',
      header: 'Loyal Customer',
    },
    {
      primaryKey: 'totalSpent',
      header: 'Amount Spent',
      format: PipeFormat.CURRENCY,
    },
  ];

  customerButtonSettings: ButtonSettings[] = [
    {
      title: 'Info',
      class: ['btn', 'btn-info'],
      params: ['name', 'totalSpent', 'email', 'phone'],
      func: (name: string, totalSpent: number, email: string, phone: string) => {
        Swal.fire("Customer info", `Customer name: ${name} spent $${totalSpent}. Email: ${email}. Phone: ${phone}`, 'info');
      },
    },
  ];
   
}
