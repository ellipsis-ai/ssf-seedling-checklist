function(ellipsis) {
  const intro = `
🌱Hello, this is the SSF Seedling Systems Checklist reminder. 

Anyone in this channel can answer the following five yes/no questions. Click below to begin.
`;
ellipsis.success(intro, {
  choices: [{
    label: "Start",
    actionName: "run-checklist",
    allowOthers: true
  }]
});
}
