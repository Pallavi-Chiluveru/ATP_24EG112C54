
//           iii. discount.js - Coupon and discount logic
//                           // Available coupons
                          const coupons = {
                            'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
                            'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
                            'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };
                          
//                           // TODO: Implement these functions
                          
                          export function validateCoupon(couponCode, cartTotal, cartItems) {
                             const coupon = coupons[couponCode];
                            // 1. Check if coupon exists
                            if (!coupon) 
                              return { valid: false, message: "Invalid coupon code" };
  
                            // 2. Check minimum amount requirement

                            // 3. Check category requirement (if any)
                            if (coupon.category) {
                              const categoryMatch = cartItems.some(
                               item => item.category === coupon.category);                     
                               if (!categoryMatch) {
                               return { valid: false, message: "Coupon not applicable for these products" };
                               }
                             }

                             return { valid: true, message: "Coupon applied successfully" };
                            }
                            
                          
                          
                          export function calculateDiscount(couponCode, cartTotal) {
                            const coupon = coupons[couponCode];
                            if (coupon.type === "percentage") {    
                                return (cartTotal * coupon.value) / 100;
                             }
                               if (coupon.type === "flat") {
                                return coupon.value;
                            }
                             return 0;
                          }
                          
                          export function applyDiscount(cartTotal, couponCode, cartItems) {
                          const validation = validateCoupon(couponCode, cartTotal, cartItems);
                           if (!validation.valid) {
                          return {
                          originalTotal: cartTotal,
                          discount: 0,
                          finalTotal: cartTotal,
                          message: validation.message
                        };
                        }
                       const discountAmount = calculateDiscount(couponCode, cartTotal);
                       const finalTotal = cartTotal - discountAmount;
                       return {
                       originalTotal: cartTotal,
                        discount: discountAmount,
                       finalTotal: finalTotal,
                        message: "Discount applied successfully"
                       };
                      }
                          
