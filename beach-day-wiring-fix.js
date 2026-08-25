// The beach-day TODAY panel is injected after app.js attaches its original button listeners.
// Delegate the replacement FOOD button so it behaves exactly like the original.
document.addEventListener("click", event => {
  const jump = event.target.closest("#plan .jump-tab");
  if (!jump) return;
  activateTab(jump.dataset.targetTab);
});
