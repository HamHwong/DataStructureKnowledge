var treePoint = [23, 76, 12, 6, 3, 90, 56, 1, 66]
var rootNode = null
class point {
  constructor(value, leftP, rightP) {
    this.leftP = leftP
    this.rightP = rightP
    this.value = value
  }
}

function insert(root, val) {
  if (null == root) {
    return new point(val, null, null)
  }
  if (root.value > val) {
    root.leftP = insert(root.leftP, val)
  }
  if (root.value < val) {
    root.rightP = insert(root.rightP, val)
  }
  return root
}

for (i of treePoint)
  rootNode = insert(rootNode, i)

var treePoint = [23, 76, 12, 6, 3, 90, 56, 7, 66]
var AVLRootNode = null
class AVLPoint {
  constructor(value, leftP, rightP) {
    this.leftP = leftP
    this.rightP = rightP
    this.value = value
    this.bf = 0
  }
}

function AVLTreeInsert(root, val) {
  //每次插入需要考虑子树深度，和左右旋
  // let lbf, rbf = 0
  if (null == root) {
    return new AVLPoint(val, null, null)
  }
  if (root.value > val) {
    root.leftP = AVLTreeInsert(root.leftP, val)
    // root.bf++
  }
  if (root.value < val) {
    root.rightP = AVLTreeInsert(root.rightP, val)
    // root.bf--
  }

  if (Math.abs(root.bf) > 1) {
    //若度绝对值大于1，则需要旋转
    if (root.bf > 0) {
      //若为正，则说明左子树不平衡
      //右旋转
      // var LRoot = root.leftP
      // var newRoot = LRoot.leftP
      // // var tempRoot = 
      // newRoot.rightP = 
      // root.leftP = newRoot
      // newRoot.rightP = root
    } else {
      //若为负，则右子树不平衡
    }
  }

  return root
}

for (i of treePoint) {
  // debugger
  AVLRootNode = AVLTreeInsert(AVLRootNode, i)
}

function getHeight(Root) {
  //若无左右节点，代表其为叶子结点，返回其高度1
  if (null == Root.leftP && null == Root.rightP)
    return 1
  //l,r来保存左右节点最大高度
  let l = 0,
    r = 0
  if (Root.leftP) {
    l = getHeight(Root.leftP) + 1
  }
  if (Root.rightP) {
    r = getHeight(Root.rightP) + 1
  }
  return Math.max(l, r)
}