function updateData(e, data, setFn) {
  const fieldName = e.target.id;
  const value = e.target.value;

  setFn({ ...data, [fieldName]: value });
}
function summonBtn(event) {
  const parent = event.target;
  const button = parent.querySelector("button");
  button.style.display = "inline-block";
}
function hideBtn(event) {
  const parent = event.target;
  const button = parent.querySelector("button");
  button.style.display = "none";
}

export { updateData, summonBtn, hideBtn };
