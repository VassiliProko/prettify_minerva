const toggle = document.getElementById('toggleSwitch');
const status = document.getElementById('status');

// Get the current state on load and sync the UI
chrome.storage.local.get('enabled', (data) => {
	const isEnabled = data.enabled ?? false;
	toggle.checked = isEnabled;
	updateUI(isEnabled);
});

// Update storage and reload tab when toggled
toggle.addEventListener('change', () => {
	const newState = toggle.checked;
	chrome.storage.local.set({ enabled: newState }, () => {
		updateUI(newState);

		// Reload current tab
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			if (tabs[0]?.id) {
				chrome.tabs.reload(tabs[0].id);
			}
		});
	});
});

function updateUI(isEnabled) {
	status.textContent = isEnabled ? 'Prettify Minerva Enabled' : 'Prettify Minerva Disabled';
}