# Testing Guide - Cart & Search Features

## 🧪 How to Test the Features

### 1. Search Functionality
**Steps:**
1. Click the **search icon** (🔍) in the header
2. Type product name (e.g., "notebook", "paint", "pen")
3. See real-time filtered results
4. Click "Add to Cart" on any result
5. See toast notification confirming addition
6. Close search by clicking X or backdrop

**Expected Results:**
- ✅ Search modal opens instantly
- ✅ Results filter as you type
- ✅ Shows "No products found" if no matches
- ✅ Products can be added to cart from search
- ✅ Toast appears confirming addition

### 2. Add to Cart from Homepage
**Steps:**
1. Scroll to "Bestsellers" section
2. Click "Add to Cart" on any product
3. See toast notification
4. Check cart icon badge updates

**Expected Results:**
- ✅ Toast shows product name
- ✅ Cart badge shows correct count
- ✅ Can add same product multiple times (quantity increases)

### 3. View Cart
**Steps:**
1. Click the **cart icon** (🛒) in header
2. Cart drawer slides in from right
3. View all added products

**Expected Results:**
- ✅ Drawer opens with smooth animation
- ✅ Shows all cart items
- ✅ Displays product details and prices
- ✅ Shows total price at bottom

### 4. Update Quantity
**Steps:**
1. Open cart drawer
2. Click **+** button to increase quantity
3. Click **-** button to decrease quantity
4. Watch total price update

**Expected Results:**
- ✅ Quantity increases/decreases
- ✅ Total price recalculates
- ✅ Item removes when quantity reaches 0

### 5. Remove Items
**Steps:**
1. Open cart drawer
2. Click **trash icon** on any item
3. Or click "Clear all items" to empty cart

**Expected Results:**
- ✅ Item removed immediately
- ✅ Total price updates
- ✅ Shows empty cart message when no items

### 6. Cart Persistence
**Steps:**
1. Add items to cart
2. Refresh the page (F5)
3. Check cart icon

**Expected Results:**
- ✅ Cart count persists
- ✅ All items still in cart
- ✅ Quantities preserved

### 7. Dark Mode
**Steps:**
1. Click **moon/sun icon** to toggle dark mode
2. Open search modal
3. Open cart drawer

**Expected Results:**
- ✅ All components adapt to dark theme
- ✅ Text remains readable
- ✅ Colors adjust properly

### 8. Mobile Responsive
**Steps:**
1. Open browser DevTools (F12)
2. Toggle device toolbar (mobile view)
3. Test all features

**Expected Results:**
- ✅ Search and cart icons visible in mobile menu
- ✅ Drawers and modals work on mobile
- ✅ Touch interactions work smoothly

## 🐛 Common Issues & Solutions

### Issue: Cart count not updating
**Solution:** Make sure you're using the `useCart` hook in components

### Issue: Search not showing results
**Solution:** Check that products exist in `src/lib/data.js`

### Issue: Cart empty after refresh
**Solution:** Check browser localStorage is enabled

### Issue: Styles not loading
**Solution:** Restart dev server: `npm run dev`

## 📊 Test Checklist

- [ ] Search opens and closes
- [ ] Search filters products correctly
- [ ] Add to cart from search works
- [ ] Add to cart from carousel works
- [ ] Toast notifications appear
- [ ] Cart drawer opens and closes
- [ ] Cart count badge updates
- [ ] Quantity increase/decrease works
- [ ] Remove item works
- [ ] Clear all items works
- [ ] Total price calculates correctly
- [ ] Cart persists after refresh
- [ ] Dark mode works on all components
- [ ] Mobile responsive
- [ ] Keyboard navigation works

## 🎯 Sample Test Products

Products available in the system:
1. **Premium Notebook Set** - ₹499
2. **Watercolor Paint Set** - ₹899
3. **Luxury Pen Collection** - ₹1299
4. **Gift Hamper Deluxe** - ₹1999
5. **Student Starter Kit** - ₹799
6. **Desk Organizer Set** - ₹649

Try searching for:
- "notebook"
- "paint"
- "pen"
- "gift"
- "art"
- "office"
