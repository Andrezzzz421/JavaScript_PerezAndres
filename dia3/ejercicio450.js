var deleteNode = function(root, key) {

    if(!root){
        return null;
    }
    if (key < root.val){
        root.left = deleteNode(root.left, key);
    } else if (key > root.val){
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left) {
            return root.right;
        } else if (!root.right){
            return root.left;
        }
        let sucesor = root.right;
        while (sucesor.left){
            sucesor = sucesor.left;
        }
        root.val = sucesor.val;
        root.right = deleteNode(root.right, sucesor.val);
    }
    return root;
};