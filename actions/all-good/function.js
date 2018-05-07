function(ellipsis) {
  const response = `
If you change your mind and want to answer the individual questions, type:

\`...run ssf seedling checklist\`

`;
ellipsis.success(response, {
  next: {
    actionName: "run-checklist",
    args: [
      { name: "lights", value: "yes" },
      { name: "fans", value: "yes" },
      { name: "hvac", value: "yes" }
    ]
  }
});
}
