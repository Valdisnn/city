document.addEventListener("DOMContentLoaded", () => {
  'use strict';
  const ma = document.querySelector("#cart-button"),
    a = document.querySelector(".modal"),
    b = document.querySelector(".close"),
    c = document.querySelector(".button-auth"),
    d = document.querySelector(".modal-auth"),
    e = document.querySelector(".close-auth"),
    f = document.querySelector("#logInForm"),
    g = document.querySelector("#login"),
    h = document.querySelector(".user-name"),
    i = document.querySelector(".button-out"),
    j = document.querySelector(".cards-restaurants"),
    k = document.querySelector(".container-promo"),
    l = document.querySelector(".restaurants"),
    m = document.querySelector(".menu"),
    n = document.querySelector(".logo"),
    o = document.querySelector(".cards-menu"),
    p = document.querySelector(".restaurant-title"),
    q = document.querySelector(".rating"),
    r = document.querySelector(".price"),
    s = document.querySelector(".category"),
    t = document.querySelector(".modal-body"),
    u = document.querySelector(".modal-pricetag"),
    v = document.querySelector(".clear-cart"),
    w = document.querySelector(".set-info"),
    x = document.querySelector(".modal-title"),
    y = document.getElementById("hellopreloader_preload");
  let z = document.getElementById("my_modal"),
    A = document.getElementById("btn_modal_window"),
    B = document.getElementsByClassName("close_modal_window_footer")[0],
    C = document.getElementById("my_modal_slider"),
    D = document.getElementById("btn_modal_slider"),
    E = document.getElementsByClassName("close_modal_window_slider")[0],
    F = document.getElementById("footer-name-input"),
    G = document.getElementById("footer-tel-input"),
    H = document.querySelector(".submit-footer-btn"),
    I = document.getElementById("footer-info-text"),
    J = document.getElementById("my_modal_timer"),
    na = document.getElementById("modal_content_timer"),
    oa = document.getElementsByClassName("close_modal_window_timer")[0];
  setTimeout(function () {
    J.style.display = "block"
  }, 5e3), na.addEventListener("click", () => {
    event.preventDefault(), J.style.display = "block"
  }), oa.addEventListener("click", () => {
    event.preventDefault(), J.style.display = "none"
  }), window.addEventListener("click", a => {
    let b = a.target;
    b === J && (J.style.display = "none")
  }), A.addEventListener("click", () => {
    event.preventDefault(), z.style.display = "block"
  }), B.addEventListener("click", () => {
    event.preventDefault(), z.style.display = "none"
  }), window.addEventListener("click", c => {
    let a = c.target;
    a === z && (z.style.display = "none")
  }), D.addEventListener("click", () => {
    event.preventDefault(), C.style.display = "block"
  }), E.addEventListener("click", () => {
    event.preventDefault(), C.style.display = "none"
  }), document.addEventListener("click", c => {
    let a = c.target;
    a === C && (C.style.display = "none")
  });
  let pa = localStorage.getItem("Log");
  pa && (G.value = pa);
  const qa = [],
    L = () => {
      localStorage.getItem(pa) && JSON.parse(localStorage.getItem(pa)).forEach(b => {
        qa.push(b)
      })
    },
    M = () => {
      localStorage.setItem(pa, JSON.stringify(qa))
    },
    N = async c => {
      const a = await fetch(c);
      if (!a.ok) throw new Error(`Ошибка по адресу ${c}, статус оишбки ${a.status}!`);
      return await a.json()
    }, O = () => {
      a.classList.toggle("is-open")
    }, P = c => {
      c.style.opacity = 1;
      let a = setInterval(() => {
        c.style.opacity -= .05, .05 >= c.style.opacity && (clearInterval(a), y.style.display = "none")
      }, 16)
    };
  window.onload = () => {
    setTimeout(() => {
      P(y)
    }, 1500)
  };
  const Q = () => {
      d.classList.toggle("is-open")
    },
    R = () => {
      const a = () => {
        pa = null, G.value = "", F.value = "", qa.length = 0, localStorage.removeItem("Log"), c.style.display = "", h.style.display = "", i.style.display = "", g.style = "", ma.style.display = "", i.removeEventListener("click", a), T(), location.reload()
      };
      h.textContent = pa, c.style.display = "none", h.style.display = "inline", i.style.display = "flex", ma.style.display = "flex", i.addEventListener("click", a), L()
    },
    S = () => {
      const d = a => (a.preventDefault(), pa = g.value, G.value = pa, "" === pa.trim() ? void f.reset() : void(11 > pa.length || (localStorage.setItem("Log", pa), Q(), c.removeEventListener("click", Q), e.removeEventListener("click", Q), f.removeEventListener("submit", d), f.reset(), T())));
      c.addEventListener("click", Q), e.addEventListener("click", Q), f.addEventListener("submit", d)
    },
    T = () => {
      pa ? R() : S()
    },
    U = i => {
      const {
        image: a,
        kitchen: b,
        name: c,
        price: d,
        stars: e,
        products: f,
        time_of_delivery: g
      } = i;
      j.insertAdjacentHTML("beforeend", `
      
            <a class="card card-restaurant" 
            data-products="${f}"
            data-info="${[c,d,e,b]}">
            <img src="${a}" alt="image" class="card-image" />
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title">${c}</h3>
                <span class="card-tag tag">${g} мин</span>
              </div>
              <div class="card-info">
                <div class="rating">
                  ${e}
                </div>
                <div class="price">От ${d} ₽</div>
                <div class="category">${b}</div>
              </div>
            </div>
          </a>
      `)
    },
    V = h => {
      const {
        description: a,
        image: b,
        name: c,
        price: d,
        id: e
      } = h, f = document.createElement("div");
      f.className = "card", f.insertAdjacentHTML("beforeend", `
      
          <img src="${b}" alt="image" class="card-image" />
          <div class="card-text">
            <div class="card-heading">
              <h3 class="card-title card-title-reg">${c}</h3>
            </div>
            <div class="card-info">
              <div class="ingredients">${a}
              </div>
            </div>
            <div class="card-buttons">
              <button class="button button-primary button-add-cart" id="${e}">
                <span class="button-card-text">Оформить</span>
                <span class="button-cart-svg"></span>
              </button>
              <strong class="card-price-bold">${d} ₽</strong>
            </div>
          </div>
      `), o.insertAdjacentElement("beforeend", f)
    };
  let W = document.querySelector(".white-area"),
    X = document.querySelector(".my-yandex-map"),
    Y = document.querySelector(".footer"),
    Z = document.querySelector(".map-text");
  const $ = d => {
    X.style = "display: none", Y.style = "display: none", Z.style = "display:none", setTimeout(() => {
      W.classList.remove("white-area")
    }, 500), setTimeout(() => {
      X.style = "display: block", Y.style = "display: block", Z.style = "display: block"
    }, 1500);
    const a = d.target,
      g = a.closest(".card-restaurant");
    if (g) {
      const c = g.dataset.info.split(","),
        [a, b, d, e] = c;
      o.textContent = "", k.classList.add("hide"), l.classList.add("hide"), m.classList.remove("hide"), p.textContent = a, q.textContent = d, r.textContent = `От ${b} ₽`, s.textContent = e, N(`./db/${g.dataset.products}`).then(b => {
        b.forEach(V)
      })
    }
  };
  new Swiper(".container-promo", {
    autoplay: {
      delay: 5e3
    },
    loop: !0,
    sliderPerView: 1,
    SlidesPerColumn: 1
  });
  const _ = c => {
      const a = c.target;
      a.matches("#login") && (a.value = a.value.replace(/[^+0-9]/g, "")), a.matches("#password") && (a.value = a.value.replace(/[^a-zA-Z0-9]/g, ""))
    },
    aa = d => {
      t.classList.add("online-cart");
      const h = d.target,
        b = h.closest(".button-add-cart");
      if (b) {
        const c = h.closest(".card"),
          a = c.querySelector(".card-title-reg").textContent,
          d = c.querySelector(".card-price-bold").textContent,
          e = b.id,
          f = qa.find(b => b.id === e);
        f ? f.count++ : qa.push({
          id: e,
          title: a,
          cost: d,
          count: 1
        })
      }
      M()
    },
    ba = () => {
      t.textContent = "", qa.forEach(({
        id: e,
        title: a,
        cost: b,
        count: c
      }) => {
        t.insertAdjacentHTML("afterbegin", `
        <div class="food-row">
          <span class="food-name">${a}</span>
            <strong class="food-price">${b}</strong>
               <div class="food-counter">
               <button class="counter-button counter-minus" data-id=${e}>—</button>
              </div>
        </div>
        `)
      });
      const b = qa.reduce((c, a) => c + parseFloat(a.cost) * a.count, 0);
      u.textContent = b + " \u20BD"
    },
    ca = c => {
      const d = c.target;
      if (d.classList.contains("counter-button")) {
        const b = qa.find(b => b.id === d.dataset.id);
        d.classList.contains("counter-minus") && (b.count--, 0 === b.count && (qa.splice(qa.indexOf(b), 1), t.classList.remove("online-cart"))), d.classList.contains("counter-plus") && b.count++, ba()
      }
      M()
    };
  T(), (() => {
    N("./db/partners.json").then(b => {
      b.forEach(U)
    }), ma.addEventListener("click", () => {
      ba(), O()
    }), v.addEventListener("click", () => {
      qa.length = 0, t.classList.remove("online-cart"), ba(), localStorage.removeItem(pa, JSON.stringify(qa))
    }), e.addEventListener("click", () => {
      f.reset(), g.style = ""
    }), f.addEventListener("input", () => {
      g.style = ""
    }), j.addEventListener("click", () => (window.scrollBy(110, -1e10), pa ? void $(event) : void Q())), n.addEventListener("click", () => {
      W.classList.add("white-area"), k.classList.remove("hide"), l.classList.remove("hide"), m.classList.add("hide")
    }), t.addEventListener("click", ca), b.addEventListener("click", O), o.addEventListener("click", aa), f.addEventListener("input", _)
  })();
  const da = b => {
    if ((document.layers || document.getElementById && !document.all) && 2 == b.which) return "\u041E\u0448\u0438\u0431\u043A\u0430 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F", !1
  };
  document.layers ? (document.captureEvents(Event.MOUSEDOWN), document.onmousedown = da) : (document.onmouseup = da, document.oncontextmenu = () => {
    if (document.all) return "\u041E\u0448\u0438\u0431\u043A\u0430 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F", !1
  }), document.oncontextmenu = new Function("return false"), w.addEventListener("click", () => {
    event.preventDefault();
    let d = {
      title: "\u0417\u0430\u043A\u0430\u0437 \u0441 \u0441\u0430\u0439\u0442\u0430",
      name: JSON.stringify(pa),
      cart: JSON.stringify(qa)
    };
    if (!t.classList.contains("online-cart")) return w;
    let e = new XMLHttpRequest,
      a = "order=" + d.title + "&tel=" + d.name + "&subject=" + d.cart;
    e.open("GET", "/server.php?" + a), e.onreadystatechange = () => {
      if (4 == e.readyState) {
        let b = e.status;
        200 == b ? console.log("\u0423\u0441\u043F\u0435\u0448\u043D\u0430\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430") : (x.textContent = "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A =(", console.error("\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u043D\u0435\u0443\u0441\u043F\u0435\u0448\u043D\u0430"))
      }
    }, e.send(), qa.length = 0, t.classList.remove("online-cart"), ba(), localStorage.removeItem(pa, JSON.stringify(qa)), w.remove(), x.textContent = "\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043E\u043F\u0442\u0440\u0430\u0432\u043B\u0435\u043D\u0430 !"
  });
  let ea = (c => {
      let a = document.cookie.match(new RegExp("(?:^|; )" + c.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
      return a ? decodeURIComponent(a[1]) : void 0
    })("cookiecook"),
    fa = document.getElementsByClassName("cookie_notice")[0];
  "no" != ea && (fa.style.display = "block", document.getElementById("cookie_close").addEventListener("click", () => {
    fa.style.display = "none";
    let b = new Date;
    b.setDate(b.getDate() + 1), document.cookie = "cookiecook=no; path=/; expires=" + b.toUTCString()
  }), document.getElementById("cookie_btn_close").addEventListener("click", () => {
    location.reload()
  })), ((j, a, k) => {
    void 0 === k && (k = ["#fff"]);
    let b = !0,
      l = document.getElementById("console"),
      e = 1,
      m = 1,
      n = !1,
      o = document.getElementById(a);
    o.setAttribute("style", "color:" + k[0]), window.setInterval(() => {
      0 === e && !1 === n ? (n = !0, o.innerHTML = j[0].substring(0, e), window.setTimeout(() => {
        let a = k.shift();
        k.push(a);
        let b = j.shift();
        j.push(b), m = 1, o.setAttribute("style", "color:" + k[0]), e += m, n = !1
      }, 0)) : e === j[0].length + 1 && !1 === n ? (n = !0, window.setTimeout(() => {
        m = -1, e += m, n = !1
      }, 3e3)) : !1 == n && (o.innerHTML = j[0].substring(0, e), e += m)
    }, 50), window.setInterval(() => {
      !0 === b ? (l.className = "console-underscore hidden", b = !1) : (l.className = "console-underscore", b = !0)
    }, 400)
  })(["\u0433. \u041D\u0438\u0436\u043D\u0438\u0439 \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434, \u0443\u043B. \u041B\u0430\u0440\u0438\u043D\u0430, \u0434. 13, \u043A. 1 ", "\u2190 \u041F\u041A\u041C / 2x\u041A\u043B\u0438\u043A = \u0442\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430 \uD83C\uDF03", "\u041D\u043E\u0432\u044B\u0435 \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u0435 \u0430\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438", "8(920)253-40-84 / 8(831)413-40-84", "\u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432", "citycarnn@mail.ru", "\u0421 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u043C \u0438\u043B\u0438 \u0431\u0435\u0437 ", "\u2190 \u041F\u041A\u041C / 2x\u041A\u043B\u0438\u043A = \u0442\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430 \uD83C\uDF03", "8:00 - 20:00 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E"], "text", [""]);
  const ga = document.getElementById("theme-button"),
    ha = document.getElementById("theme-link"),
    ia = c => {
      let a = new XMLHttpRequest;
      a.open("GET", "./server.php?theme=" + c, !0), a.send()
    },
    ja = () => {
      let c = ha.getAttribute("href"),
        d = "";
      "css/style.css" == c ? (c = "css/dark.css", d = "dark") : (c = "css/style.css", d = "light"), ha.setAttribute("href", c), ia(d)
    };
  ga.addEventListener("contextmenu", () => {
    ja()
  }), ga.addEventListener("dblclick", () => {
    ja()
  });
  const ka = document.querySelector(".check-footer-form");
  H.addEventListener("click", () => {
    event.preventDefault();
    let d = {
      title: "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A",
      nameForm: F.value,
      telForm: G.value
    };
    if ("" === d.nameForm || "" === d.telForm) return H;
    if (11 > d.telForm.length) return H;
    if (!ka.checked) return H;
    let e = new XMLHttpRequest,
      a = "order=" + d.title + "&name=" + d.nameForm + "&tel=" + d.telForm;
    e.open("GET", "/server.php?" + a), e.onreadystatechange = () => {
      if (4 == e.readyState) {
        let b = e.status;
        200 == b ? console.log("\u0423\u0441\u043F\u0435\u0448\u043D\u0430\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430") : (I.textContent = "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A =(", console.error("\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u043D\u0435\u0443\u0441\u043F\u0435\u0448\u043D\u0430"))
      }
    }, e.send(), H.remove(), I.textContent = "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 !"
  })
});