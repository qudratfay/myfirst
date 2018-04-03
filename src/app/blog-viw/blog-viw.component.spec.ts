import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogViwComponent } from './blog-viw.component';

describe('BlogViwComponent', () => {
  let component: BlogViwComponent;
  let fixture: ComponentFixture<BlogViwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogViwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogViwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
