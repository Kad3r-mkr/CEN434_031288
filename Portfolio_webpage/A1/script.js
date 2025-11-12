var itemState = document.getElementsByClassName('itemState')
var _btn1 = document.getElementsByClassName('btn1')
var _btn2 = document.getElementsByClassName('btn2')
var _price = document.getElementsByClassName('price')

var tItems = document.getElementById('total_items')
var tPrice = document.getElementById('total_price')

var slider = document.getElementsByClassName("amountSlider");
var output = document.getElementsByClassName("currentAmount");

// Cart stored in localStorage under key 'cart'
var cart = JSON.parse(localStorage.getItem('cart')) || { totalItems: 0, totalPrice: 0, items: [] };

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

/* Blog page behavior: only run when blog elements are present */
(function(){
    if (!document.querySelector('.blog-outer')) return; // not the blog page

    // Likes
    (function(){
        var key = 'covu_likes_v1';
        var count = Number(localStorage.getItem(key) || 0);
        var likesCount = document.getElementById('likesCount');
        var likeBtn = document.getElementById('likeBtn');
        if (!likesCount || !likeBtn) return;
        function render(){ likesCount.innerText = count + (count === 1 ? ' like' : ' likes'); }
        render();
        likeBtn.addEventListener('click', function(){ count++; localStorage.setItem(key,count); render(); });
    })();

    // Comments (local)
    (function(){
        var key = 'covu_comments_v1';
        var list = JSON.parse(localStorage.getItem(key) || '[]');
        var commentsList = document.getElementById('commentsList');
        var commentForm = document.getElementById('commentForm');
        if (!commentsList || !commentForm) return;
        function escapeHtml(s){ return (''+s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
        function render(){
            commentsList.innerHTML = '';
            if(!list.length){ commentsList.innerHTML = '<p class="muted">No comments yet. Share your experience.</p>'; return; }
            list.slice().reverse().forEach(function(c){
                var d = document.createElement('div'); d.className = 'comment';
                d.innerHTML = '<div style="font-weight:600">'+escapeHtml(c.name)+'</div>'
                            + '<div class="muted small">'+new Date(c.ts).toLocaleString()+'</div>'
                            + '<div style="margin-top:6px">'+escapeHtml(c.text)+'</div>';
                commentsList.appendChild(d);
            });
        }
        render();
        commentForm.addEventListener('submit', function(e){
            e.preventDefault();
            var name = document.getElementById('commentName').value || 'Anonymous';
            var text = document.getElementById('commentText').value || '';
            if(!text.trim()) return alert('Please write a comment.');
            list.push({name:name.trim(), text:text.trim(), ts:Date.now()});
            localStorage.setItem(key, JSON.stringify(list));
            document.getElementById('commentName').value = '';
            document.getElementById('commentText').value = '';
            render();
        });
        var clearBtn = document.getElementById('clearComments');
        if (clearBtn) clearBtn.addEventListener('click', function(){ if(!confirm('Clear all comments?')) return; list=[]; localStorage.removeItem(key); render(); });
    })();

    // Subscribe
    (function(){
        var key = 'covu_subs_v1';
        var form = document.getElementById('subscribeForm');
        var subMsg = document.getElementById('subMsg');
        if (!form) return;
        form.addEventListener('submit', function(e){
            e.preventDefault();
            var emailEl = document.getElementById('subEmail');
            if(!emailEl) return;
            var email = emailEl.value.trim();
            if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ if(subMsg) subMsg.innerText='Enter a valid email.'; return; }
            var arr = JSON.parse(localStorage.getItem(key) || '[]');
            if(arr.indexOf(email) === -1){ arr.push(email); localStorage.setItem(key, JSON.stringify(arr)); if(subMsg) subMsg.innerText='Thanks — subscribed!'; form.reset(); }
            else { if(subMsg) subMsg.innerText='You are already subscribed.'; }
        });
    })();

})();

function formatCurrency(n){ return "$" + Number(n || 0).toFixed(2); }

function updateCartDisplay() {
    if (tItems) tItems.innerText = cart.totalItems || 0;
    if (tPrice) tPrice.innerText = formatCurrency(cart.totalPrice);

    // render the sidebar cart list (checkout_section) if present
    var sidebar = document.querySelector('.checkout_section');
    if (sidebar) {
        var html = '<h2>Checkout Section</h2>';
        if (cart.items && cart.items.length) {
            html += '<div class="sidebar_items" style="max-height:240px; overflow:auto;">';
            cart.items.forEach(function(it){
                html += '<div style="display:flex; gap:8px; align-items:center; padding:6px 0; border-bottom:1px solid #eee;">'
                     + '<img src="'+it.image+'" style="width:48px;height:48px;object-fit:cover;border-radius:4px;">'
                     + '<div style="flex:1">'
                     + '<div style="font-size:0.9rem;">'+it.name+'</div>'
                     + '<div style="font-size:0.8rem;color:#666;">Qty: '+it.quantity+' • '+formatCurrency(it.price)+'</div>'
                     + '</div>'
                     + '<div style="font-weight:600">'+formatCurrency(it.subtotal)+'</div>'
                     + '</div>';
            });
            html += '</div>';
        } else {
            html += '<p style="color:#666;">Cart is empty</p>';
        }
        html += '<p style="margin-top:8px">Total Items: <strong>'+ (cart.totalItems || 0) +'</strong></p>';
        html += '<p>Total Price: <strong>'+ formatCurrency(cart.totalPrice) +'</strong></p>';
        html += '<button class="btn" id="checkout_btn">Proceed to Checkout</button>';
        sidebar.innerHTML = html;

        var btn = document.getElementById('checkout_btn');
        if (btn) btn.addEventListener('click', function(){
            window.location.href = 'checkOutPage.html';
        });
    }
}

// initialize display from cart (if present)
updateCartDisplay();

// function calculateTotalPrice(items,taxRate){
//     let totalPrice=0;
//     let totalQuantity=0;
//         for(let i=0;i<items.length;i++){
//         let itemSubtotal=items[i].price*items[i].quantity;
//         totalPrice+=itemSubtotal;
//         totalQuantity+=items[i].quantity;
//     }
//     let totalTax=totalPrice*taxRate;
//     let finalTotalPrice=totalPrice+totalTax;
//     return{totalPrice:finalTotalPrice.toFixed(2),totalQuantity:totalQuantity};
// }


for (let x = 0; x < output.length; x++){
    output[x].innerHTML = slider[x].value;
    slider[x].oninput = function() {
        output[x].innerHTML = this.value;

        if (Number(slider[x].value) < 4) {
            document.getElementsByClassName('itemState')[x].innerText = "On Sale!"
        } else {
            document.getElementsByClassName('itemState')[x].innerText = "Sold Out!!"
        }
    }

    _btn1[x].addEventListener('click', function() {
        // Buy Now: add selected amount to cart and go to checkout
        let num = Number(_price[x].textContent.replace(/[^0-9.-]+/g, ''));
        let amm = Number(slider[x].value);
        if (amm < 4) {
            let subtotal = num * amm;
            // collect item metadata
            var img = document.getElementsByClassName('item_img')[x];
            var imageSrc = img ? img.src : '';
            var name = imageSrc ? imageSrc.split('/').pop() : ('Item ' + (x+1));

            // add or update item in cart
            var existing = cart.items.find(function(i){ return i.id === x; });
            if (existing) {
                existing.quantity = Number(existing.quantity) + amm;
                existing.subtotal = Number(existing.subtotal) + subtotal;
            } else {
                cart.items.push({ id: x, name: name, image: imageSrc, price: num, quantity: amm, subtotal: subtotal });
            }

            cart.totalItems = Number(cart.totalItems) + amm;
            cart.totalPrice = Number(cart.totalPrice) + subtotal;
            saveCart();
            updateCartDisplay();
            // navigate to checkout page
            window.location.href = 'checkOutPage.html';
        } else {
            // keep same behavior for sold out
            alert('Not Available - Sold Out');
        }
        console.log('buyNow clicked')
    })

    _btn2[x].addEventListener('click', function() {
        // Add to cart: update totals and persist, but stay on page
        let num = Number(_price[x].textContent.replace(/[^0-9.-]+/g, ''));
        let amm = Number(slider[x].value);
        if (amm < 4) {
            let subtotal = num * amm;
            var img = document.getElementsByClassName('item_img')[x];
            var imageSrc = img ? img.src : '';
            var name = imageSrc ? imageSrc.split('/').pop() : ('Item ' + (x+1));

            var existing = cart.items.find(function(i){ return i.id === x; });
            if (existing) {
                existing.quantity = Number(existing.quantity) + amm;
                existing.subtotal = Number(existing.subtotal) + subtotal;
            } else {
                cart.items.push({ id: x, name: name, image: imageSrc, price: num, quantity: amm, subtotal: subtotal });
            }

            cart.totalItems = Number(cart.totalItems) + amm;
            cart.totalPrice = Number(cart.totalPrice) + subtotal;
            saveCart();
            updateCartDisplay();
            // small visual feedback
            let oldText = _btn2[x].innerText;
            _btn2[x].innerText = 'Added';
            setTimeout(function() { _btn2[x].innerText = oldText; }, 1000);
        } else {
            alert('Not Available - Sold Out');
        }
        console.log('addToCart clicked')
    })
}
