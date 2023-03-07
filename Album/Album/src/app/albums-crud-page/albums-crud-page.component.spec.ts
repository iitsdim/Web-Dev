import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsCrudPageComponent } from './albums-crud-page.component';

describe('AlbumsCrudPageComponent', () => {
  let component: AlbumsCrudPageComponent;
  let fixture: ComponentFixture<AlbumsCrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsCrudPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
