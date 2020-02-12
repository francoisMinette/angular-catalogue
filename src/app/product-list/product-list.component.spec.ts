import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
	let component: ProductListComponent;
	let fixture: ComponentFixture<ProductListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
			declarations: [ProductListComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
