class xyPosition {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const mainDom = document.querySelector("main");
const COLOR_ICON = "#a1a1a1";

// 搜索组件
class SearchComponent {
  #currentPos = null;
  _searchBoxDom = document.createElement("div");
  _moveBtnDom = document.createElement("span");
  _navBarDom = document.createElement("input");

  constructor(pos) {
    this._currentPos = pos;
    this._searchBoxDom.classList.add("search-box");
    this._moveBtnDom.classList.add("move-btn");
    this._moveBtnDom.addEventListener(
      "mousedown",
      this.onMoveBtnDown.bind(this),
      false
    );
    this._navBarDom.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Enter") {
          window.open(
            "http://www.baidu.com/s?wd=" + this._navBarDom.value,
            "_blank"
          );
        }
      },
      false
    );
    this.draw();
  }

  set _currentPos(pos) {
    this._searchBoxDom.style.top = pos.y + "rem";
    this._searchBoxDom.style.left = pos.x + "rem";
    this.#currentPos = pos;
  }

  get _currentPos() {
    return this.#currentPos;
  }

  draw() {
    this._searchBoxDom.appendChild(this._moveBtnDom);

    this._moveBtnDom.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="22" width="36" height="22" rx="2" stroke="${COLOR_ICON}" stroke-width="4" stroke-linejoin="round"/><path d="M14 22v-8c0-5.523 4.477-10 10-10s10 4.477 10 10v8m-10 8v6" stroke="${COLOR_ICON}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        `;
    this._searchBoxDom.appendChild(this._navBarDom);
    mainDom.appendChild(this._searchBoxDom);
  }

  onMoveBtnDown(event) {
    this._searchBoxDom.style.userSelect = "none";
    mainDom.classList.add("chose");
    this._moveBtnDom.classList.add("chose");

    this._moveBtnDom.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="22.048" width="34" height="22" rx="2" stroke="${COLOR_ICON}" stroke-width="4" stroke-linejoin="round"/><path d="M14 22v-7.995c-.005-5.135 3.923-9.438 9.086-9.954S32.967 6.974 34 12.006M24 30v6" stroke="${COLOR_ICON}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        `;

    let initPos = new xyPosition(
      event.clientX - this._currentPos.x,
      event.clientY - this._currentPos.y
    );

    mainDom.onmousemove = (e) => {
      this.onMainDomMouseMove(e, initPos);
    };

    mainDom.onmouseup = () => {
      this.onMoveBtnUp();
    };

    mainDom.onmouseleave = () => {
      this.onMoveBtnUp();
    };
  }

  onMoveBtnUp() {
    this._searchBoxDom.style.userSelect = "auto";
    mainDom.classList.remove("chose");
    this._moveBtnDom.classList.remove("chose");
    this._moveBtnDom.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="22" width="36" height="22" rx="2" stroke="${COLOR_ICON}" stroke-width="4" stroke-linejoin="round"/><path d="M14 22v-8c0-5.523 4.477-10 10-10s10 4.477 10 10v8m-10 8v6" stroke="${COLOR_ICON}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        `;

    mainDom.onmousemove = null;
    mainDom.onmouseup = null;
    mainDom.onmouseleave = null;

    // 存储
    storeData();
  }

  onMainDomMouseMove(event, initPos) {
    this._currentPos = new xyPosition(
      event.clientX - initPos.x,
      event.clientY - initPos.y
    );
    if (this._currentPos.x < 10) {
      this._currentPos = new xyPosition(10, this._currentPos.y);
    }

    if (this._currentPos.y < 10) {
      this._currentPos = new xyPosition(this._currentPos.x, 10);
    }

    if (
      this._currentPos.x + this._searchBoxDom.offsetWidth >
      mainDom.offsetWidth - 10
    ) {
      this._currentPos = new xyPosition(
        mainDom.offsetWidth - 10 - this._searchBoxDom.offsetWidth,
        this._currentPos.y
      );
    }

    if (
      this._currentPos.y + this._searchBoxDom.offsetHeight >
      mainDom.offsetHeight - 10
    ) {
      this._currentPos = new xyPosition(
        this._currentPos.x,
        mainDom.offsetHeight - 10 - this._searchBoxDom.offsetHeight
      );
    }
  }
}

// 快捷方式组件
class ShortcutComponent {
  #currentPos = null;
  _shortcutBoxDom = document.createElement("div");
  _moveBtnDom = document.createElement("span");
  _shortcutDom = document.createElement("div");
  _shortcutIconDom = document.createElement("span");
  _shortcutDescribeDom = document.createElement("p");

  constructor(pos, describeStr, address, svgStr) {
    this._currentPos = pos;
    this._describeStr = describeStr;
    this._address = address;
    this._svgStr = svgStr;
    this._shortcutBoxDom.classList.add("shortcut-box");
    this._moveBtnDom.classList.add("move-btn");
    this._shortcutDom.classList.add("shortcut");
    this._shortcutIconDom.classList.add("shortcut-icon");
    this._shortcutDescribeDom.classList.add("shortcut-describe");

    this._moveBtnDom.addEventListener(
      "mousedown",
      this.onMoveBtnDown.bind(this),
      false
    );

    this._shortcutBoxDom.addEventListener(
      "click",
      (event) => {
        if (event.target !== this._moveBtnDom) {
          window.open(this._address, "_blank");
        }
      },
      false
    );
    this.draw();
  }

  set _currentPos(pos) {
    this._shortcutBoxDom.style.top = pos.y + "rem";
    this._shortcutBoxDom.style.left = pos.x + "rem";
    this.#currentPos = pos;
  }

  get _currentPos() {
    return this.#currentPos;
  }

  draw() {
    this._shortcutBoxDom.appendChild(this._moveBtnDom);
    this._moveBtnDom.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="22" width="36" height="22" rx="2" stroke="${COLOR_ICON}" stroke-width="4" stroke-linejoin="round"/><path d="M14 22v-8c0-5.523 4.477-10 10-10s10 4.477 10 10v8m-10 8v6" stroke="${COLOR_ICON}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        `;
    this._shortcutBoxDom.appendChild(this._shortcutDom);
    this._shortcutDom.appendChild(this._shortcutIconDom);
    this._shortcutDom.appendChild(this._shortcutDescribeDom);
    this._shortcutIconDom.innerHTML = this._svgStr;
    this._shortcutDescribeDom.textContent = this._describeStr;
    mainDom.appendChild(this._shortcutBoxDom);
  }

  onMoveBtnDown(event) {
    mainDom.classList.add("chose");
    this._moveBtnDom.classList.add("chose");

    this._moveBtnDom.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="22.048" width="34" height="22" rx="2" stroke="${COLOR_ICON}" stroke-width="4" stroke-linejoin="round"/><path d="M14 22v-7.995c-.005-5.135 3.923-9.438 9.086-9.954S32.967 6.974 34 12.006M24 30v6" stroke="${COLOR_ICON}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        `;

    let initPos = new xyPosition(
      event.clientX - this._currentPos.x,
      event.clientY - this._currentPos.y
    );

    mainDom.onmousemove = (e) => {
      this.onMainDomMouseMove(e, initPos);
    };

    mainDom.onmouseup = () => {
      this.onMoveBtnUp();
    };

    mainDom.onmouseleave = () => {
      this.onMoveBtnUp();
    };
  }

  onMoveBtnUp() {
    mainDom.classList.remove("chose");
    this._moveBtnDom.classList.remove("chose");
    this._moveBtnDom.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="22" width="36" height="22" rx="2" stroke="${COLOR_ICON}" stroke-width="4" stroke-linejoin="round"/><path d="M14 22v-8c0-5.523 4.477-10 10-10s10 4.477 10 10v8m-10 8v6" stroke="${COLOR_ICON}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        `;

    mainDom.onmousemove = null;
    mainDom.onmouseup = null;
    mainDom.onmouseleave = null;

    // 存储
    storeData();
  }

  onMainDomMouseMove(event, initPos) {
    this._currentPos = new xyPosition(
      event.clientX - initPos.x,
      event.clientY - initPos.y
    );
    if (this._currentPos.x < 10) {
      this._currentPos = new xyPosition(10, this._currentPos.y);
    }

    if (this._currentPos.y < 10) {
      this._currentPos = new xyPosition(this._currentPos.x, 10);
    }

    if (
      this._currentPos.x + this._shortcutBoxDom.offsetWidth >
      mainDom.offsetWidth - 10
    ) {
      this._currentPos = new xyPosition(
        mainDom.offsetWidth - 10 - this._shortcutBoxDom.offsetWidth,
        this._currentPos.y
      );
    }

    if (
      this._currentPos.y + this._shortcutBoxDom.offsetHeight >
      mainDom.offsetHeight - 10
    ) {
      this._currentPos = new xyPosition(
        this._currentPos.x,
        mainDom.offsetHeight - 10 - this._shortcutBoxDom.offsetHeight
      );
    }
  }
}

// 点击清空数据
document.querySelector(".init-btn").onclick = () => {
  clearData();
  location.reload();
};

// 设置搜索栏
const searchComponent = new SearchComponent(
  getData()
    ? new xyPosition(getData().searchPos.x, getData().searchPos.y)
    : new xyPosition(250, 150)
);

// 设置快捷方式
const s1 = new ShortcutComponent(
  getData()
    ? new xyPosition(getData().s1.x, getData().s1.y)
    : new xyPosition(200, 300),
  "视频",
  "http://www.baidu.com/s?wd=视频",
  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#333" fill="#2F88FF" d="M4 10a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v9l8-6v23l-8-6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10Z"/><circle stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#FFF" fill="#43CCF8" r="5" cy="21" cx="17"/></svg>`
);

const s2 = new ShortcutComponent(
  getData()
    ? new xyPosition(getData().s2.x, getData().s2.y)
    : new xyPosition(440, 300),
  "游戏",
  "http://www.baidu.com/s?wd=游戏",
  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#333" d="M19 30v3a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7V19M29 30v3a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7V19"/><rect stroke-width="4" stroke="#333" fill="#2cff22" rx="11" height="22" width="38" y="8" x="5"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#FFF" d="M21 19h-8M17 15v8"/><rect fill="#FFF" rx="2" height="4" width="4" y="15" x="32"/><rect fill="#FFF" rx="2" height="4" width="4" y="20" x="28"/></svg>`
);

const s3 = new ShortcutComponent(
  getData()
    ? new xyPosition(getData().s3.x, getData().s3.y)
    : new xyPosition(680, 300),
  "音乐",
  "http://www.baidu.com/s?wd=音乐",
  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><rect stroke-width="4" stroke="#333" rx="2" height="32" width="38" y="8" x="5"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#333" d="M13 8v32"/><circle stroke-width="4" stroke="#333" fill="#ff2240" r="9" cy="24" cx="28"/><circle fill="#FFF" r="3" cy="24" cx="28"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#333" d="M5 16h8M5 24h8M5 32h8"/></svg>`
);

// 存储数据
function storeData() {
  if (!("localStorage" in window && window["localStorage"] !== null)) {
    return;
  }

  // 数据存储格式
  let data = {
    searchPos: {
      x: searchComponent._currentPos.x,
      y: searchComponent._currentPos.y,
    },
    s1: { x: s1._currentPos.x, y: s1._currentPos.y },
    s2: { x: s2._currentPos.x, y: s2._currentPos.y },
    s3: { x: s3._currentPos.x, y: s3._currentPos.y },
  };
  localStorage.setItem("sdf2fsnav", JSON.stringify(data));
}

function getData() {
  if (!("localStorage" in window && window["localStorage"] !== null)) {
    return;
  }
  let obj = JSON.parse(localStorage.getItem("sdf2fsnav"));
  return obj;
}

function clearData() {
  if (!("localStorage" in window && window["localStorage"] !== null)) {
    return;
  }
  localStorage.clear();
}
