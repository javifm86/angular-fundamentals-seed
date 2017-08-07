import { Component } from '@angular/core';

// @Component({
//     selector: 'app-root',
//     styleUrls: ['app.component.scss'],
//     template: `
//     <div class="app">
//         <h3>Airline Passengers</h3>
//         <ul>
//             <li *ngFor="let passenger of passengers; let i = index;">
//                 <span
//                     class="status"
//                     [class.checked-in]="passenger.checkedIn"
//                 >
//                 </span>
//                 {{ i }} : {{ passenger.fullname }}
//             </li>
//         </ul>
//         <h3>Airline Passengers</h3>
//         <ul>
//             <li *ngFor="let passenger of passengers; let i = index;">
//                 <span
//                     class="status"
//                     [class.checked-in]="passenger.checkedIn"
//                     [ngClass]="{ 'checked-in' : passenger.checkedIn }"
//                 >
//                 </span>
//                 {{ i }} : {{ passenger.fullname }}
//             </li>
//         </ul>
//         <h3>Airline Passengers</h3>
//         <ul>
//             <li *ngFor="let passenger of passengers; let i = index;">
//                 <span
//                     class="status"
//                     [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')"
//                 >
//                 </span>
//                 {{ i }} : {{ passenger.fullname }}
//             </li>
//         </ul>
//         <h3>Airline Passengers</h3>
//         <ul>
//             <li *ngFor="let passenger of passengers; let i = index;">
//                 <span
//                     class="status"
//                     [ngStyle]="{backgroundColor : (passenger.checkedIn ? '#2ecc71' : '#c0392b')}"
//                 >
//                 </span>
//                 {{ i }} : {{ passenger.fullname }}
//             </li>
//         </ul>
//     </div>
//   `
// })

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
    <div class="app">
        <passenger-viewer></passenger-viewer>
    </div>
    `
})

export class AppComponent {}

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.component.scss'],
//   template: `
//     <div class="app">
//       <button (click)="handleClick(username.value)">
//         Get value
//       </button>
//       <input type="text" #username>
//     <div *ngIf="name.length">
//       Searching for... {{name}}
//     </div>
//     </div>
//   `
// })

// export class AppComponent {
//   name: String = "";
//   handleClick(value: string) {
//     this.name = value;
//     console.log(value);
//   }
// }

