// Welcome Message

// ===============================
// AMAZON CLONE ADVANCED SCRIPT
// ===============================

// Welcome Message

window.addEventListener("load", () => {
    console.log("Amazon Clone Loaded Successfully 🚀");
});

// ===============================
// DARK MODE
// ===============================

const darkBtn = document.getElementById("dark-mode-btn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// ===============================
// SEARCH BAR
// ===============================

const searchInput =
document.querySelector(".search_input");

const searchBtn =
document.querySelector(".search_icon");

function performSearch() {

    const value =
    searchInput.value.toLowerCase();

    const products =
    document.querySelectorAll(".box");

    products.forEach((product) => {

        const title =
        product.querySelector("h2")
        .innerText
        .toLowerCase();

        if (title.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}

if (searchBtn) {
    searchBtn.addEventListener(
        "click",
        performSearch
    );
}

if (searchInput) {
    searchInput.addEventListener(
        "keyup",
        performSearch
    );
}

// ===============================
// CART COUNTER
// ===============================

let cartCount =
parseInt(localStorage.getItem("cart")) || 0;

const cartCounter =
document.getElementById("cart-count");

if (cartCounter) {
    cartCounter.innerText = cartCount;
}

const productBoxes =
document.querySelectorAll(".box");

productBoxes.forEach((box) => {

    box.addEventListener("click", () => {

        cartCount++;

        localStorage.setItem(
            "cart",
            cartCount
        );

        if (cartCounter) {
            cartCounter.innerText =
            cartCount;
        }

        const productName =
        box.querySelector("h2")
        .innerText;

        alert(
            `${productName} added to cart 🛒`
        );

    });

});

// ===============================
// CART ICON CLICK
// ===============================

const cart =
document.querySelector(".nav_cart");

if (cart) {

    cart.addEventListener("click", () => {

        alert(
            `You have ${cartCount} item(s) in cart`
        );

    });

}

// ===============================
// SIGN IN
// ===============================

const signIn =
document.querySelector(".nav_signin");

if (signIn) {

    signIn.addEventListener("click", () => {

        alert(
            "Sign In Feature Coming Soon"
        );

    });

}

// ===============================
// ORDERS
// ===============================

const orders =
document.querySelector(".nav_return");

if (orders) {

    orders.addEventListener("click", () => {

        alert(
            "No Orders Available"
        );

    });

}

// ===============================
// HERO IMAGE SLIDER
// ===============================

const hero =
document.querySelector(".herosect");

const heroImages = [
    "box11.jpg",
    "box22.jpg",
    "box33.jpg",
    "box4.jpg"
];

let currentHero = 0;

if (hero) {

    setInterval(() => {

        currentHero++;

        if (
            currentHero >= heroImages.length
        ) {
            currentHero = 0;
        }

        hero.style.backgroundImage =
        `url('${heroImages[currentHero]}')`;

    }, 3000);

}

// ===============================
// BACK TO TOP
// ===============================

const backToTop =
document.querySelector(".foot_panel1");

if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}

// ===============================
// PANEL MENU
// ===============================

const panelOptions =
document.querySelectorAll(
    ".panel_opts p"
);

panelOptions.forEach((option) => {

    option.addEventListener(
        "click",
        () => {

            alert(
                `${option.innerText} page coming soon`
            );

        }
    );

});

// ===============================
// PRODUCT HOVER EFFECT
// ===============================

productBoxes.forEach((box) => {

    box.addEventListener(
        "mouseenter",
        () => {

            box.style.transform =
            "translateY(-10px)";

        }
    );

    box.addEventListener(
        "mouseleave",
        () => {

            box.style.transform =
            "translateY(0px)";

        }
    );

});

// ===============================
// PAGE VISIT COUNTER
// ===============================

let visits =
parseInt(
    localStorage.getItem("visits")
) || 0;

visits++;

localStorage.setItem(
    "visits",
    visits
);

console.log(
    `Total Visits: ${visits}`
);

// ===============================
// END
// ===============================