import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileMarketComponent } from './file-market.component';

describe('FileMarketComponent', () => {
  let component: FileMarketComponent;
  let fixture: ComponentFixture<FileMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
