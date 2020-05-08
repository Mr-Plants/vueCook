/**
 * 编译dom
 * 替换插值
 */
class Compile {
  constructor(vm, el) {
    this.vm = vm;
    this.el = document.querySelector(el);
    this.fragment = this.dom2fragment();

    this.compile();
  }

  /**
   * 循环（递归）元素的子节点，并全部放入文档碎片
   */
  dom2fragment() {
    const frag = document.createDocumentFragment();
    let child;
    // 当取不到元素时child等于undefined，表达式返回undefined
    while (child = this.el.firstChild) {
      // 只要el存在子节点，就把第一个子节点移动到碎片
      frag.appendChild(child)
    }
    return frag;
  }

  /**
   *
   */
  compile() {

  }
}
