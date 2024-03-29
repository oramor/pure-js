class A {
  constructor() {
    this.ctx = "a";
  }

  getCtx() {
    console.log(this);
  }

  fn1() {
    this.getCtx();
  }

  fn2() {
    const fn = () => this.getCtx();
    fn();
  }

  fn3() {
    /**
     * Функция как бы изымается из объекта и теперь в переменной fn просто функция
     * без всякой связи с контекстом. Поскольку классы — не более, чем синтаксический
     * сахар, фукнция должна вызываться на объекте, чтобы оставаться методом класса.
     */
    const fn = this.getCtx;
    fn();
  }

  fn4() {
    /**
     * Аналогично с коллбеком. Метод, передаваемый в коллбек, становится
     * обычно функцией с не определенным контекстом.
     */
    function fn(cb) {
      cb();
    }
    fn(this.getCtx);
  }

  fn5() {
    /**
     * Для сохранения контекста следует использовать метод bind
     */
    const fn = this.getCtx.bind(this);
    fn();
  }
}

const a = new A();
a.fn1();
a.fn2();
a.fn3();
a.fn4();
a.fn5();
