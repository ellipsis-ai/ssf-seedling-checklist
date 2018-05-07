function(ellipsis) {
  const intro = `
🌱Hello, this is the SSF Seedling Systems Checklist reminder. 

Anyone in this channel can respond. Click \`Start\` to begin or \`All good\` to quickly report that everything is in order.
`;
ellipsis.success(intro, {
  choices: [
    {
      label: "Start",
      actionName: "run-checklist",
      allowOthers: true
    },
    {
      label: ":white_check_mark: All good",
      actionName: "all-good",
      allowOthers: true
    }
  ]
});
}
