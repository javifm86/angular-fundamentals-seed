import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count
                [items]="passengers">
            </passenger-count>
            <div *ngFor="let passenger of passengers;">
            {{ passenger.fullname }}
            </div>
            <passenger-detail
                *ngFor="let passenger of passengers;"
                [detail]="passenger"
                (remove)="handleRemove($event)"
                (edit)="handleEdit($event)"
                (view)="handleView($event)"
                >
            </passenger-detail>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor(
        private passengerService: PassengerDashboardService,
        private router: Router
    ) {
        // this.passengerService = PassengerDashboardService;
    }
    ngOnInit() {
        console.log('ngOnInit');
        this.passengerService
            .getPassengers()
            // .then((data: Passenger[]) => { // Promise version
            .subscribe(
            (data: Passenger[]) => {
                this.passengers = data;
            },
            (error: any) => console.log('Error'));
    }

    handleRemove(event: Passenger) {

        this.passengerService
            .removePassenger(event)
            // .then((data: Passenger) => { // Promise version
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.filter((passenger: Passenger) => {
                    return passenger.id !== event.id;
                });
            });
    }

    handleEdit(event: Passenger) {

        this.passengerService
            .updatePassenger(event)
            // .then((data: Passenger) => { // Promise version
            .subscribe((data: Passenger) => {

                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if (passenger.id === event.id) {
                        passenger = Object.assign({}, passenger, event);
                    }
                    return passenger;
                });

            });
    }

    handleView(event: Passenger) {
        this.router.navigate(['/passengers', event.id])
    }

}