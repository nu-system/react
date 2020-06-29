/**
 * All the dialog element will append in this node
 */
export default function Root() {
  const domRoot = document.getElementById("nu_dialog_root");
  if (domRoot) {
    return domRoot;
  }
  const newRoot = document.createElement("div");
  newRoot.id = "nu_dialog_root";
  document.body.appendChild(newRoot);
  return newRoot;
};