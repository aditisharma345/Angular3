import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' /* provides the services in the model root injector */,
})
export class EmployeeService {
  constructor() {}
  getEmployees() {
    return [
      { id: 1, name: 'azsx', email: 'edws@aszx' },
      { id: 2, name: 'qaed', email: 'edfr@desw' },
      { id: 3, name: 'qaws', email: 'fvdc@yhtg' },
    ];
  }
}

/* Service is responsible to provide the employee data.
  @Injectable tells the angular that this service might itself have injected dependencies */
