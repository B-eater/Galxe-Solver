function check_click(){
    try{
        const elementsToClick = document.querySelectorAll('.d-flex.height-100.width-100.click-area');
        if(elementsToClick){
            const clickElement = (element) => {
                try{
                    const event = new MouseEvent('click', {
                        view: window,
                        bubbles: true,
                        cancelable: true
                    });
                    element.dispatchEvent(event);
                }
                catch{}
            };
            elementsToClick.forEach(clickElement);
        }
        
    }catch{}
}


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'check_click') {
        check_click();
    }
  });
