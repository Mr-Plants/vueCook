let a = 'Hello world!'

b = a.toLowerCase()
  .replace(/\W+/g, '-')   // 匹配空格，替换为'-'
  .replace(/(^-|-$)/g, '')  // 匹配特殊字符 替换为''

console.log(b)
