#Task 1:
- Created "ProductComponent".
- Added "Buy" button.
- Added "ProductModel" class and "Product" interface.
- Created "ProductsService" returns hardcoded array of test products.
- Created "ProductListComponent" shows list of products.
- Created "CartService" supports list of added items.
- Button "Buy" updated to add products to the cart with "CartService".
- Created "CartComponent" shows list of added items or empty message.
- Additional functionality: average ratings.
- Additional functionality: cart total.

#Task 2:
- Functionality placed to the few feature modules: "CartModule", "ProductsModule", "SharedModule"
- Added border around "ProductComponent" items.
- Added products count to cart.
- Logic to get count/total extracted to the "CartService".
- Logic to add products to cart list extracted from "ProductComponent" to the parent.
- Added new "CartItem" entity and corresponding "CartItemComponent" to show it.
- Updated "CartService" to maintain list of "CartItem" entities.
- Added methods to remove items from the card and increase/decrease quantity to the "CartService".
- Unavailable product displayed with disabled button and grayed text.
- Project title sets from the "AppComponent" via ViewChild and template variable.
- OnPush strategy applied to the "ProductsListComponent" and "CartItemComponent".
- Custom directive created to highlight cart items on mose over.
- Additional functionality: buttons to remove cart items, increase/decrease quantity.
- Updated "CartService" and "CartComponent" to use OnPush strategy with help of subscription on data changes event.
- Changed "ProductModel" to use constructor with member declarations.
- Extracted calculation of average rating to the "ProductsService".

#Task3
- Added total and quantity values to the "CartService" and automatic recalculation when cart changes.
- Created "LocalStorageService".
- Created "ConfigOptionsService".
- Created "ConstantsService".
- Created "GeneratorService".
- Added "CoreModule" with all new services registered.
- Created "ContactUsComponent" with all new services injected.
- Created "EnlargeFontDirective" to change font size of host element bigger when clicked.
