/**
 * 编译dom
 * 替换插值
 */
class Compile {
  constructor(vm, el) {
    this.vm = vm;
    this.el = document.querySelector(el);
    this.fragment = this.dom2fragment();

    this.compile(this.fragment);
    this.el.appendChild(this.fragment);
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
   * 将vue模版转换为html模版
   * @param nodes 类数组
   */
  compile(node) {
    const childNodes = node.childNodes;
    Array.from(childNodes).forEach(node => {
      if (node.nodeType === 1) {
        // dom标签
        console.log('dom标签' + node.nodeName)
        this.compileElement(node)
      } else if (this.isInterpolation(node)) {
        console.log('插值表达式' + node.textContent);
        // 进行文本节点的内容替换
        this.compileText(node, RegExp.$1)
      }
      // 递归
      node.childNodes.length > 0 && this.compile(node)
      // node.hasChildNodes() && this.compile(node.childNodes)
    })
  }

  /**
   * 返回一个节点是否是包含花胡子的文本节点
   * @param node
   * @returns {boolean}
   */
  isInterpolation(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  compileText(node, exp) {
    // todo vue中如何处理多层对象    $data['bar.name']=undefined
    this.updateText(node, this.vm[exp]);
    new Watcher(this.vm, exp, () => {
      this.updateText(node, this.vm[exp]);
    })
  }

  updateText(node, val) {
    node.textContent = val;
  }

  compileElement(node) {
    const attrs = node.attributes;
    for (let i = 0; i < attrs.length; i++) {
      const attrName = attrs[i].name;
      // 仅仅兼容w-text指令
      if (attrName.indexOf('w-') === 0) {
        this.compileText(node, attrs[i].value)
      }
    }
  }
}
