import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index;">
                    <span
                        class="status"
                        [class.checked-in]="passenger.checkedIn"
                    >
                    </span>
                    {{ i }} : {{ passenger.fullname }}
                    <p>{{ passenger | json }}</p>
                    <div class="date">
                        Check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked' }}
                    </div>
                    <div class="children">
                        Children: {{ passenger.children?.length || 0 }}
                    </div>
                </li>
            </ul>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor() { }
    ngOnInit() {
        console.log('ngOnInit');
        this.passengers = [
            {
                id: 1,
                fullname: 'Javier',
                checkedIn: true,
                checkInDate: 1499855928616,
                children: [{ name: "César", age: 10 }, { name: "Lucía", age: 8 }]
            },
            {
                id: 2,
                fullname: 'Pepe',
                checkedIn: false,
                children: null
            },
            {
                id: 3,
                fullname: 'Luis',
                checkedIn: false,
                children: [{ name: "César", age: 10 }, { name: "Lucía", age: 8 }]
            },
            {
                id: 4,
                fullname: 'Carlos',
                checkedIn: true,
                checkInDate: 1499855978616,
                children: null
            },
        ];
    }
}