function updateData(e, data, setFn) {
  const fieldName = e.target.id;
  const value = e.target.value;

  setFn({ ...data, [fieldName]: value });
}

export { updateData };
