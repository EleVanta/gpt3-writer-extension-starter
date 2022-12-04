const generateCompletionAction = async (info) => {}

chrome.contextMenus.create({
    id: 'context-run',
    title: 'Generate Recipes',
    contexts: ['selection'],
  });

  chrome.contextMenus.onClicked.addListener(generateCompletionAction);