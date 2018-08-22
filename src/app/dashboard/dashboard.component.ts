import { Component, OnInit, Input } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	@Input() user: User;

	gusers:any;
	postdetail:any;
	finalres:any;

	nurl ='http://comcreatedev.me/yakubov/av.php';
	purl ='http://comcreatedev.me/yakubov/avpost.php';

    constructor(private http: HttpClient) { }

	ngOnInit() {
    	this.getData();
	}

	getData(): void {
		this.http.get(this.nurl).subscribe(res => this.gusers = res);  
	}

	getUser(id: number): void {
	    const url = `${this.nurl}?id=${id}`;
	    this.http.get<User>(url).subscribe(res => this.postdetail = res); 
	}

	updateUser(): void {
		this.http.put(this.purl, this.postdetail, httpOptions).subscribe(res => {
			this.finalres = res;
		   console.log(res);
		}); 
	}


}
