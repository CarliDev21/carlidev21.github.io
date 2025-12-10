import { HeaderComponent } from './header.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { HeaderService } from '../services/header-service/header.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: HeaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // For standalone components, add them to `imports` (do not declare)
      imports: [
        HeaderComponent,
        AngularFireModule.initializeApp(environment.firebase),
      ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(HeaderService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Header documents from Firestore', () => {
    expect(service.getHeader()).not.toBeNull();
  });
});
