import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsentModalNavigationComponent } from "./consent-modal-navigation.component";

describe("ConsentModalNavigationComponent", () => {
  let component: ConsentModalNavigationComponent;
  let fixture: ComponentFixture<ConsentModalNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsentModalNavigationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentModalNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
