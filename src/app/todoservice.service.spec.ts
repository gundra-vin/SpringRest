import { TestBed, async, inject } from '@angular/core/testing';

import { TodoserviceService } from './todoservice.service';

describe('TodoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [TodoserviceService]
  }));

  it('should be created', inject([TodoserviceService], (service: TodoserviceService) => {
    expect(service).toBeTruthy();
  }));

  it('get all tasks', inject([TodoserviceService], (service: TodoserviceService) => {
    expect(service.getallTasks()).nothing();
  }));

});

