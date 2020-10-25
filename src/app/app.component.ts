import { Component, OnInit } from '@angular/core';
import { S1Service } from './s1.service';
import { ChangeDetectorRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from 'googlemaps';
import {Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('map') mapElement: any;
map: google.maps.Map;
title: 'My Map';
lat: '35.2271';
lng: '-80.8431';
  constructor(private data: S1Service) {
  }

  ngOnInit(): void {
    const ObservableOne = new Observable();
   const mapProperties = {
        center: new google.maps.LatLng(35.2271, -80.8431),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
}
}


