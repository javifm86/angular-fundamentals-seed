import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count
                [items]="passengers">
            </passenger-count>
            <passenger-detail
                *ngFor="let passenger of passengers;"
                [detail]="passenger"
                (remove)="handleRemove($event)"
                (edit)="handleEdit($event)"
                >
            </passenger-detail>
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

    handleRemove(event){
        console.log(event);
    }

    handleEdit(event){
        console.log(event);
    }

}